const express = require("express");
const followValidator = require("../validators/follow/follow");
const followController = require("../controllers/followController");

const router = express.Router();

router.route("/follow").post(followValidator, followController.create);

module.exports = router;
