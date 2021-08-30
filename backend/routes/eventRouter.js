const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();
const createValidator = require("../validators/event/create");
const updateValidator = require("../validators/event/update");

router
  .route("/")
  .get(eventController.findAll)
  .post(createValidator, eventController.create);

router
  .route("/:id")
  .get(eventController.find)
  .put(updateValidator, eventController.update)
  .delete(eventController.destroy);

module.exports = router;
