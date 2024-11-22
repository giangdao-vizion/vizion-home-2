import cv2
import numpy as np

def remove_black_background(image):
    """
    Xóa phần nền đen khỏi ảnh đã ghép và làm vùng nền trong suốt (thêm kênh alpha).
    """
    # Tách kênh màu (RGB) và thêm kênh alpha nếu chưa có
    if image.shape[2] == 4:  # Nếu đã có kênh alpha
        b, g, r, a = cv2.split(image)
    else:
        b, g, r = cv2.split(image)
        a = np.ones_like(b, dtype=np.uint8) * 255

    # Tạo mask cho vùng nền đen
    mask = (b == 0) & (g == 0) & (r == 0)

    # Làm vùng nền đen trong suốt
    a[mask] = 0

    # Ghép lại ảnh với kênh alpha đã xử lý
    return cv2.merge((b, g, r, a))

def align_and_expand_images(image1_path, image2_path, output_path):
    """
    Ghép hai ảnh với căn chỉnh tự động và xóa nền đen sau khi ghép.
    """
    # Đọc hai hình ảnh
    img1 = cv2.imread(image1_path)
    img2 = cv2.imread(image2_path)

    # Chuyển sang grayscale
    gray1 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
    gray2 = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)

    # Phát hiện đặc trưng bằng SIFT
    sift = cv2.SIFT_create()
    keypoints1, descriptors1 = sift.detectAndCompute(gray1, None)
    keypoints2, descriptors2 = sift.detectAndCompute(gray2, None)

    # So khớp đặc trưng bằng BFMatcher
    bf = cv2.BFMatcher(cv2.NORM_L2, crossCheck=True)
    matches = bf.match(descriptors1, descriptors2)
    matches = sorted(matches, key=lambda x: x.distance)

    # Lấy tọa độ của các điểm khớp
    points1 = np.float32([keypoints1[m.queryIdx].pt for m in matches])
    points2 = np.float32([keypoints2[m.trainIdx].pt for m in matches])

    # Tính ma trận biến đổi Homography
    matrix, mask = cv2.findHomography(points2, points1, cv2.RANSAC, 5.0)

    # Tính kích thước canvas mới
    height1, width1, _ = img1.shape
    height2, width2, _ = img2.shape

    corners_img2 = np.array([
        [0, 0],
        [width2, 0],
        [width2, height2],
        [0, height2]
    ], dtype=np.float32).reshape(-1, 1, 2)
    transformed_corners = cv2.perspectiveTransform(corners_img2, matrix)

    # Lấy góc ngoài cùng của canvas
    all_corners = np.vstack((np.array([[0, 0], [width1, 0], [width1, height1], [0, height1]]), transformed_corners.reshape(-1, 2)))
    [x_min, y_min] = np.int32(all_corners.min(axis=0))
    [x_max, y_max] = np.int32(all_corners.max(axis=0))

    # Dịch chuyển để canvas không bị âm
    translation = [-x_min, -y_min]
    translation_matrix = np.array([[1, 0, translation[0]], [0, 1, translation[1]], [0, 0, 1]])

    # Warp hình ảnh
    canvas_width = x_max - x_min
    canvas_height = y_max - y_min
    aligned_img2 = cv2.warpPerspective(img2, translation_matrix @ matrix, (canvas_width, canvas_height))

    # Tạo canvas và ghép hai hình
    canvas = np.zeros((canvas_height, canvas_width, 3), dtype=np.uint8)
    canvas[translation[1]:translation[1]+height1, translation[0]:translation[0]+width1] = img1

    # Ghép hình thứ hai bằng cách lấy pixel có thông tin
    mask_img2 = (aligned_img2 > 0)  # Mask để tìm vùng không phải nền đen
    canvas[mask_img2] = aligned_img2[mask_img2]

    # Xóa nền đen trong canvas
    canvas_with_alpha = remove_black_background(canvas)

    # Lưu kết quả
    cv2.imwrite(output_path, canvas_with_alpha)
    print(f"Ảnh kết hợp đã lưu tại: {output_path}")

# Sử dụng hàm
align_and_expand_images(
    image1_path="13.jpg",
    image2_path="14.jpg",
    output_path="aligned_and_expanded_with_transparency1.png"
)
