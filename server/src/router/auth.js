const express = require("express");
const router = express.Router();

const { signUp, signIn, signOut } = require("../controller/auth");
const requireSignin = require("../middlewere/requireSignin");
const { upload } = require("../middlewere/file");

router.post("/sign-in", signIn);
router.post("/sign-up", upload.single("picture"), signUp);
router.get("/sign-out", requireSignin, signOut);

module.exports = router;
