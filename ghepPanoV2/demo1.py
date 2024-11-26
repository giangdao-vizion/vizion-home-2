import cv2
import os

image_dir = "E:/testStitchPano/cauthang"
image_files = [os.path.join(image_dir, f) for f in os.listdir(image_dir) if f.endswith(('.jpg', '.jpeg', '.png'))]
imgs = []
for image_path in image_files:
    img = cv2.imread(image_path)
    if img is not None:
        img = cv2.resize(img, (0, 0), fx=0.4, fy=0.4)
        imgs.append(img)
        print(f"Đã đọc ảnh: {image_path}")
    else:
        print(f"Không thể đọc ảnh: {image_path}")

stitcher = cv2.Stitcher.create()
status, output = stitcher.stitch(imgs)

if status != cv2.STITCHER_OK:
    print("Ghép ảnh không thành, mã lỗi:", status)
else:
    print("Panorama đã sẵn sàng!")

    result_dir = "result"
    if not os.path.exists(result_dir):
        os.makedirs(result_dir)

    result_path = os.path.join(result_dir, 'panorama_result.jpg')
    cv2.imwrite(result_path, output)
    print(f"{result_path}")

    # cv2.imshow('Final Panorama', output)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
    