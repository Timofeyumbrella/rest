const express = require("express");

const EventController = require("../controllers/EventController");

const authenticate = require("../middleware/authenticate");
const authorization = require("../middleware/authorization");

const router = express.Router();

const createValidator = require("../validators/event/create");
const updateValidator = require("../validators/event/update");
const findAllValidator = require("../validators/event/findAll");
const findValidator = require("../validators/event/find");
const deleteValidator = require("../validators/event/delete");

router
  .route("/")
  .get(findAllValidator, authenticate, authorization, EventController.findAll)
  .post(createValidator, authenticate, authorization, EventController.create);

router
  .route("/:id")
  .get(findValidator, authenticate, authorization, EventController.find)
  .put(updateValidator, authenticate, authorization, EventController.update)
  .delete(
    deleteValidator,
    authenticate,
    authorization,
    EventController.destroy
  );

module.exports = router;
