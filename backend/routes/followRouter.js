const express = require("express");
const createValidator = require("../validators/follow/create");
const FollowController = require("../controllers/FollowController");

const authenticate = require("../middleware/authenticate");

const router = express.Router();

router
  .route("/follow")
  .post(createValidator, authenticate, FollowController.create)
  .get(authenticate, FollowController.findAll);

module.exports = router;
