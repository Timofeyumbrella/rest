const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();
const validate = require("../middleware/validate");
const { createValidator, updateValidator } = require("../utils/validator");

router
  .route("/")
  .get(eventController.findAll)
  .post(createValidator, validate, eventController.create);

router
  .route("/:id")
  .get(eventController.find)
  .put(updateValidator, validate, eventController.update)
  .delete(eventController.destroy);

module.exports = router;
