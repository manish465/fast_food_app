const express = require("express");
const router = express.Router();

const { add, showAll, showOne } = require("../controller/item");
const requireSignin = require("../middlewere/requireSignin");
const isAdmin = require("../middlewere/isAdmin");
const { upload } = require("../middlewere/file");

router.get("/", requireSignin, showAll);
router.get("/:id", requireSignin, showOne);
router.post("/add", requireSignin, isAdmin, upload.single("main_pic"), add);

module.exports = router;
