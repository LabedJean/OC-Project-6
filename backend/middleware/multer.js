const multer = require("multer");

// Crée un dictionnaire des types MIME
const mimeTypes = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_"); // Remplace espaces par underscore dans le nom
    const extension = mimeTypes[file.mimetype];
    callback(null, `${name + Date.now()}.${extension}`); // Genère le nom  du fichier
  },
});

module.exports = multer({ storage }).single("image");
