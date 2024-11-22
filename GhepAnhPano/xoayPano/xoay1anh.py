import cv2
import numpy as np

def rotate_image_with_transparency(image_path, output_path, reference_image_path=None):
    """
    Xoay ảnh bằng Homography, giữ toàn bộ nội dung và chuyển nền đen thành trong suốt (PNG với kênh alpha).
    """
    # Đọc ảnh gốc
    img = cv2.imread(image_path)
    if img is None:
        print("Lỗi: Không thể đọc ảnh gốc.")
        return

    if reference_image_path:
        # Đọc ảnh tham chiếu
        ref_img = cv2.imread(reference_image_path)
        if ref_img is None:
            print("Lỗi: Không thể đọc ảnh tham chiếu.")
            return
    else:
        # Nếu không có ảnh tham chiếu, dùng ảnh gốc làm tham chiếu
        ref_img = img

    # Chuyển ảnh sang grayscale
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray_ref = cv2.cvtColor(ref_img, cv2.COLOR_BGR2GRAY)

    # Phát hiện đặc trưng bằng SIFT
    sift = cv2.SIFT_create()
    keypoints_img, descriptors_img = sift.detectAndCompute(gray_img, None)
    keypoints_ref, descriptors_ref = sift.detectAndCompute(gray_ref, None)

    # So khớp đặc trưng bằng BFMatcher
    bf = cv2.BFMatcher(cv2.NORM_L2, crossCheck=True)
    matches = bf.match(descriptors_img, descriptors_ref)
    matches = sorted(matches, key=lambda x: x.distance)

    # Đảm bảo có đủ điểm khớp
    MIN_MATCH_COUNT = 10
    if len(matches) < MIN_MATCH_COUNT:
        print(f"Lỗi: Không đủ điểm khớp ({len(matches)}/{MIN_MATCH_COUNT}).")
        return

    # Lấy tọa độ điểm khớp
    points_img = np.float32([keypoints_img[m.queryIdx].pt for m in matches])
    points_ref = np.float32([keypoints_ref[m.trainIdx].pt for m in matches])

    # Tính ma trận Homography
    matrix, mask = cv2.findHomography(points_img, points_ref, cv2.RANSAC, 5.0)
    if matrix is None:
        print("Lỗi: Không tìm được Homography.")
        return

    # Kích thước ảnh gốc
    height, width, _ = img.shape

    # Xác định các góc của ảnh gốc
    corners = np.array([
        [0, 0],
        [width, 0],
        [width, height],
        [0, height]
    ], dtype=np.float32).reshape(-1, 1, 2)

    # Tính các góc sau khi áp dụng Homography
    transformed_corners = cv2.perspectiveTransform(corners, matrix)

    # Tìm giới hạn (bounding box) mới
    [x_min, y_min] = np.int32(transformed_corners.min(axis=0).ravel())
    [x_max, y_max] = np.int32(transformed_corners.max(axis=0).ravel())

    # Tính kích thước canvas mới và ma trận dịch chuyển
    translation = [-x_min, -y_min]
    translation_matrix = np.array([[1, 0, translation[0]], [0, 1, translation[1]], [0, 0, 1]])

    # Warp ảnh với canvas mở rộng
    canvas_width = x_max - x_min
    canvas_height = y_max - y_min
    rotated_img = cv2.warpPerspective(img, translation_matrix @ matrix, (canvas_width, canvas_height))

    # Thêm kênh alpha vào ảnh
    b, g, r = cv2.split(rotated_img)
    alpha = np.ones_like(b, dtype=np.uint8) * 255  # Tạo kênh alpha mặc định là 255 (không trong suốt)

    # Xác định vùng nền đen
    mask_black = (b == 0) & (g == 0) & (r == 0)
    alpha[mask_black] = 0  # Làm trong suốt vùng nền đen

    # Ghép lại ảnh với kênh alpha
    rotated_img_with_alpha = cv2.merge((b, g, r, alpha))

    # Lưu ảnh dưới dạng PNG với kênh alpha
    cv2.imwrite(output_path, rotated_img_with_alpha)
    print(f"Ảnh đã xoay với nền trong suốt được lưu tại: {output_path}")

# Sử dụng hàm
rotate_image_with_transparency(
    image_path="2.jpg",
    output_path="rotated.png",
     reference_image_path="1.jpg"  # Có thể bỏ qua nếu không muốn so với ảnh tham chiếu
)
