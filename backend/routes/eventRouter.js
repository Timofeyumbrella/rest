const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();

const createValidator = require("../validators/event/create");
const updateValidator = require("../validators/event/update");
const findAllValidator = require("../validators/event/findAll");
const findValidator = require("../validators/event/find");
const deleteValidator = require("../validators/event/delete");

router
  .route("/")
  .get(findAllValidator, eventController.findAll)
  .post(createValidator, eventController.create);

router
  .route("/:id")
  .get(findValidator, eventController.find)
  .put(updateValidator, eventController.update)
  .delete(deleteValidator, eventController.destroy);

module.exports = router;
