const express = require("express");

const authController = require("../controllers/authController");
const createValidator = require('../validators/auth/register');
const loginValidator = require('../validators/auth/login');

const router = express.Router();

router.route("/register").post(createValidator, authController.register);

router.route("/login").post(loginValidator, authController.login);

module.exports = router;
