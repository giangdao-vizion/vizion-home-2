import cv2
import numpy as np
import os

def rotate_and_remove_background(image_path, ref_image_path, output_path):
    """
    Xoay ảnh, loại bỏ nền đen và tạo ảnh PNG trong suốt.

    Args:
        image_path (str): Đường dẫn đến ảnh cần xử lý.
        ref_image_path (str): Đường dẫn đến ảnh tham chiếu.
        output_path (str): Đường dẫn để lưu ảnh kết quả.
    """

    # Đọc ảnh
    img = cv2.imread(image_path)
    ref_img = cv2.imread(ref_image_path)

    # Chuyển sang không gian màu grayscale
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray_ref = cv2.cvtColor(ref_img, cv2.COLOR_BGR2GRAY)

    # Tìm kiếm điểm tương đồng SIFT
    sift = cv2.SIFT_create()
    kp1, des1 = sift.detectAndCompute(gray_img, None)
    kp2, des2 = sift.detectAndCompute(gray_ref, None)

    # Nối khớp các điểm tương đồng
    bf = cv2.BFMatcher(cv2.NORM_L2, crossCheck=True)
    matches = bf.match(des1, des2)
    matches = sorted(matches, key=lambda x: x.distance)

    # Tính toán ma trận homography
    MIN_MATCH_COUNT = 10
    if len(matches) > MIN_MATCH_COUNT:
        src_pts = np.float32([kp1[m.queryIdx].pt for m in matches]).reshape(-1, 1, 2)
        dst_pts = np.float32([kp2[m.trainIdx].pt for m in matches]).reshape(-1, 1, 2)
        M, mask = cv2.findHomography(src_pts, dst_pts, cv2.RANSAC, 5.0)
        if M is None:
            print("Không thể tính toán ma trận homography")
            return
    else:
        print("Không đủ điểm tương đồng")
        return

    # Tính toán kích thước canvas cho ảnh xoay
    h, w, _ = img.shape
    pts = np.float32([[0, 0], [0, h - 1], [w - 1, h - 1], [w - 1, 0]]).reshape(-1, 1, 2)
    dst = cv2.perspectiveTransform(pts, M)
    [x_min, y_min] = np.int32(dst.min(axis=0).ravel())
    [x_max, y_max] = np.int32(dst.max(axis=0).ravel())
    w = x_max - x_min
    h = y_max - y_min

    # Tạo ma trận dịch chuyển
    translation = [-x_min, -y_min]
    T = np.float32([[1, 0, translation[0]], [0, 1, translation[1]], [0, 0, 1]])

    # Xoay ảnh
    rotated_img = cv2.warpPerspective(img, T @ M, (w, h))

    # Tạo kênh alpha
    b, g, r = cv2.split(rotated_img)
    alpha = np.ones_like(b, dtype=np.uint8) * 255

    # Xác định pixel nền đen bằng Otsu's thresholding
    gray = cv2.cvtColor(rotated_img, cv2.COLOR_BGR2GRAY)
    thresh, mask_black = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    # Làm trong suốt các pixel nền đen
    alpha[mask_black] = 0

    # Kết hợp các kênh và lưu ảnh
    rgba_img = cv2.merge((b, g, r, alpha))
    cv2.imwrite(output_path, rgba_img)

# Ví dụ sử dụng
input_folder = "xien"
output_folder = "output"
ref_image_path = os.path.join(input_folder, "1.jpg")

for image_file in os.listdir(input_folder):
    if image_file.endswith(".jpg") or image_file.endswith(".png"):
        image_path = os.path.join(input_folder, image_file)
        output_path = os.path.join(output_folder, "rotated_" + image_file)
        rotate_and_remove_background(image_path, ref_image_path, output_path)