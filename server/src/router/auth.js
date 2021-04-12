const express = require("express");
const routes = express.Router();

const { signUp, signIn, signOut } = require("../controller/auth");
const requireSignin = require("../middlewere/requireSignin");

routes.post("/sign-in", signIn);
routes.post("/sign-up", signUp);
routes.get("/sign-out", requireSignin, signOut);

module.exports = routes;
