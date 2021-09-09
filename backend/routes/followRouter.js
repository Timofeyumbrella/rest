const express = require("express");
const followValidator = require("../validators/follow/follow");
const FollowController = require("../controllers/FollowController");

const authenticate = require("../middleware/authenticate");

const router = express.Router();

router
  .route("/follow")
  .post(followValidator, authenticate, FollowController.create);

module.exports = router;
