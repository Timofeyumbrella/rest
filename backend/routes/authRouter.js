const express = require("express");

const AuthController = require("../controllers/AuthController");
const createValidator = require("../validators/auth/register");
const loginValidator = require("../validators/auth/login");

const router = express.Router();

router.route("/register").post(createValidator, AuthController.register);

router.route("/login").post(loginValidator, AuthController.login);

module.exports = router;
