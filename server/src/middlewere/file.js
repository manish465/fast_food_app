const multer = require("multer");

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "./images/");
    },
    filename: (_req, file, cb) => {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") + file.originalname,
        );
    },
});

const fileFilter = (_req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

exports.upload = multer({ storage, fileFilter });
