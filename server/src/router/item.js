const express = require("express");
const router = express.Router();

const { add, showAll, showOne } = require("../controller/item");
const requireSignin = require("../middlewere/requireSignin");

router.get("/", requireSignin, showAll);
router.get("/:id", requireSignin, showOne);
router.post("/add", requireSignin, add);

module.exports = router;
