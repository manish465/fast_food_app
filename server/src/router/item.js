const express = require("express");
const router = express.Router();

const {
    add,
    showAll,
    showOne,
    treanding,
    popular,
    byType,
} = require("../controller/item");
const requireSignin = require("../middlewere/requireSignin");
const isAdmin = require("../middlewere/isAdmin");
const { upload } = require("../middlewere/file");

router.get("/", requireSignin, showAll);
router.get("/one-item/:id", requireSignin, showOne);
router.get("/trending", requireSignin, treanding);
router.get("/popular", requireSignin, popular);
router.get("/type/:type", requireSignin, byType);
router.post("/add", requireSignin, isAdmin, upload.single("main_pic"), add);

module.exports = router;
