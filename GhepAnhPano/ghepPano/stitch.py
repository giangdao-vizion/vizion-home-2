import cv2
import os

# Lấy tất cả ảnh từ thư mục
image_dir = "E:/testStitchPano/img4"
image_files = [os.path.join(image_dir, f) for f in os.listdir(image_dir) if f.endswith(('.jpg', '.jpeg', '.png'))]
imgs = []

# Đọc và thay đổi kích thước tất cả các ảnh
for image_path in image_files:
    img = cv2.imread(image_path)
    if img is not None:
        img = cv2.resize(img, (0, 0), fx=0.4, fy=0.4)
        imgs.append(img)
        print(f"Đã đọc ảnh: {image_path}")
    else:
        print(f"Không thể đọc ảnh: {image_path}")

# Phần code ghép ảnh giữ nguyên như cũ# Tạo đối tượng Stitcher và thực hiện ghép ảnh
stitcher = cv2.Stitcher.create()
status, output = stitcher.stitch(imgs)

# Kiểm tra kết quả nối ảnh
if status != cv2.STITCHER_OK:
    print("Ghép ảnh không thành công")
else:
    print("Panorama đã sẵn sàng!")

    # Kiểm tra và tạo thư mục result nếu chưa tồn tại
    result_dir = "result"
    if not os.path.exists(result_dir):
        os.makedirs(result_dir)

    # Lưu ảnh vào thư mục result
    result_path = os.path.join(result_dir, 'panorama_result.jpg')
    cv2.imwrite(result_path, output)
    print(f"{result_path}")

    # Hiển thị ảnh kết quả
    # cv2.imshow('Final Panorama', output)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
