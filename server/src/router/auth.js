const express = require("express");
const router = express.Router();
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

const { signUp, signIn, signOut, getUser } = require("../controller/auth");
const requireSignin = require("../middlewere/requireSignin");
const upload = multer({ storage, fileFilter });

router.get("/", getUser);
router.post("/sign-in", signIn);
router.post("/sign-up", upload.single("picture"), signUp);
router.get("/sign-out", requireSignin, signOut);

module.exports = router;
