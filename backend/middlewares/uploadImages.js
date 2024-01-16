const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Adjust the destination based on the route
    let destinationFolder;
   
    if (req.originalUrl.includes("/api/product/")) {
      destinationFolder = path.join(__dirname, "../public/images/products");
    } else if (req.originalUrl.includes("/api/blog/")) {
      destinationFolder = path.join(__dirname, "../public/images/blogs");
    } else {
      destinationFolder = path.join(__dirname, "../public/images/");
    }

    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder, { recursive: true });
    }

    cb(null, destinationFolder);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});

const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      const destinationFolder = path.join(__dirname, "../public/images/products");
      const outputFileName = file.filename.replace(/\.[^/.]+$/, "") + "-resized.jpeg";
      const outputPath = path.join(destinationFolder, outputFileName);
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);
      fs.unlinkSync(outputPath);
    })
  );
  next();
};
const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      const destinationFolder = path.join(__dirname, "../public/images/blogs");
      const outputFileName = file.filename.replace(/\.[^/.]+$/, "") + "-resized.jpeg";
      const outputPath = path.join(destinationFolder, outputFileName);
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);

      fs.unlinkSync(outputPath);
    })
  );
  next();
};

module.exports = { uploadPhoto, blogImgResize, productImgResize };
