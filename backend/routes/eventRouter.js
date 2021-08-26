const express = require("express");
const eventController = require("../controllers/eventController");
const catchWrapper = require("../utils/catchWrapper");

const router = express.Router();

catchWrapper(eventController);

router.route("/").get(eventController.findAll).post(eventController.post);

router
  .route("/:id")
  .get(eventController.find)
  .put(eventController.update)
  .delete(eventController.delete);

module.exports = router;
