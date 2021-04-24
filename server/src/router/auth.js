const express = require("express");
const router = express.Router();

const { signUp, signIn, signOut } = require("../controller/auth");
const { upload } = require("../middlewere/file");

router.post("/sign-in", signIn);
router.post("/sign-up", upload.single("picture"), signUp);

module.exports = router;
