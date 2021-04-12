const express = require("express");
const routes = express.Router();

const { signUp, signIn } = require("../controller/auth");

routes.post("/sign-in", signIn);
routes.post("/sign-up", signUp);

module.exports = routes;
