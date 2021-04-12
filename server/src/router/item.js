const express = require("express");
const router = express.Router();

const { add } = require("../controller/item");
const requireSignin = require("../middlewere/requireSignin");

router.post("/add", requireSignin, add);

module.exports = router;
