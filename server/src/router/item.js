const express = require("express");
const router = express.Router();

const { add, showAll } = require("../controller/item");
const requireSignin = require("../middlewere/requireSignin");

router.get("/", requireSignin, showAll);
router.post("/add", requireSignin, add);

module.exports = router;
