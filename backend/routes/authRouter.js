const express = require("express");
const passport = require("passport");

const authController = require("../controllers/authController");

const router = express.Router();

router.route("/register").post(authController.register);

router.route("/profile").get((req, res) => {
  const { name, email, gender } = req.user;

  res.json({ name, email, gender });
});

router
  .route("/login")
  .post(passport.authenticate("local"), authController.login);

module.exports = router;
