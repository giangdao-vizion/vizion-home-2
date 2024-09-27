const express = require('express');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const dotenv = require('dotenv');
const { renderFace } = require('./convert');
const { createCanvas, loadImage } = require('canvas');
const { processImage } = require('./convert');

dotenv.config();

const app = express();
const port = 3000;

const validFolders = ['audio', 'image', 'media', 'pdf', 'thumb', 'tour', 'video'];

// Khởi tạo S3
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

// Cấu hình multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Hàm upload lên S3
const uploadToS3 = async (bucket, key, body, acl = 'private', contentType = 'application/octet-stream') => {
  const params = {
    Bucket: bucket,
    Key: key,
    Body: body,
    ACL: acl,
    ContentType: contentType,
    ContentDisposition: 'inline'
  };
  const command = new PutObjectCommand(params);
  await s3.send(command);

  // URL tĩnh
  const baseUrl = `https://${bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  return baseUrl;
};

// API
app.post('/api/uploadFiles', upload.array('files', 10), async (req, res) => {
  try {
    const folder = req.body.folder && validFolders.includes(req.body.folder) ? req.body.folder : 'media';
    const files = req.files;
    const uploadedFiles = [];

    for (const file of files) {
      const uuid = uuidv4();
      const fileExtension = path.extname(file.originalname).toLowerCase();
      const originalFileName = `${uuid}/${file.originalname}`;
      const fileKey = `${folder}/${originalFileName}`;

      // Xác định ContentType
      let contentType = 'application/octet-stream';
      if (fileExtension === '.jpg' || fileExtension === '.jpeg') {
        contentType = 'image/jpeg';
      } else if (fileExtension === '.png') {
        contentType = 'image/png';
      } else if (fileExtension === '.pdf') {
        contentType = 'application/pdf';
      } else if (fileExtension === '.mp3') {
        contentType = 'audio/mpeg';
      } else if (fileExtension === '.mp4') {
        contentType = 'video/mp4';
      }

      // Upload ảnh gốc lên S3
      const fileUrl = await uploadToS3(process.env.AWS_BUCKET_NAME, fileKey, file.buffer, 'private', contentType);

      let thumbUrl = null;
      let convertedUrls = [];

      if (contentType.startsWith('image/')) {
        // Xử lý thumbnail
        const { width, height } = await sharp(file.buffer).metadata();
      const smallestSide = Math.min(width, height);
      const resizeRatio = 100 / smallestSide;
      const newWidth = Math.round(width * resizeRatio);
      const newHeight = Math.round(height * resizeRatio);

      // 
      const thumbSize = 100;
      const left = Math.round((newWidth - thumbSize) / 2);
      const top = Math.round((newHeight - thumbSize) / 2);

      // Resize ảnh
      const resizedBuffer = await sharp(file.buffer)
        .resize(newWidth, newHeight)
        .toBuffer();

      // Cắt ảnh
      const croppedBuffer = await sharp(resizedBuffer)
        .extract({
          left: left,
          top: top,
          width: thumbSize,
          height: thumbSize
        })
        .toBuffer();

      // Upload thumbnail
      const thumbKey = `thumb/${uuid}/${file.originalname}`;
      thumbUrl = await uploadToS3(process.env.AWS_BUCKET_NAME, thumbKey, croppedBuffer, 'private', contentType);

        // Xử lý ảnh bằng convert.js
        const convertedImages = await processImage(file.buffer);
        
        for (const [face, imageBuffer] of Object.entries(convertedImages)) {
          const convertedKey = `${folder}/${uuid}/${face}_${file.originalname}`;
          const convertedUrl = await uploadToS3(process.env.AWS_BUCKET_NAME, convertedKey, imageBuffer, 'private', 'image/png');
          convertedUrls.push({ face, url: convertedUrl });
        }
      }

      // 
      uploadedFiles.push({
        fileUrl: fileUrl,
        thumb: thumbUrl,
        convertedImages: convertedUrls
      });
    }

    // 
    res.json({
      folder: folder,
      uploadedFiles: uploadedFiles
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Đã xảy ra lỗi khi xử lý tệp' });
  }
});

app.listen(port, () => {
  console.log(`Done ${port}`);
});