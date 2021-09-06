const express = require("express");
const followValidator = require("../validators/follow/follow");
const FollowController = require("../controllers/FollowController");

const router = express.Router();

router.route("/follow").post(followValidator, FollowController.create);

module.exports = router;
