const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();
const { validateCreate, validateUpdate } = require("../middleware/validate");

router
  .route("/")
  .get(eventController.findAll)
  .post(validateCreate, eventController.create);

router
  .route("/:id")
  .get(eventController.find)
  .put(validateUpdate, eventController.update)
  .delete(eventController.destroy);

module.exports = router;
