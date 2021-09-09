const express = require("express");
const UserController = require("../controllers/UserController");

const updateValidator = require("../validators/user/update");
const findAllValidator = require("../validators/user/findAll");
const findValidator = require("../validators/user/find");
const deleteValidator = require("../validators/user/delete");

const authenticate = require("../middleware/authenticate");
const authorization = require("../middleware/authorization");

const router = express.Router();

router
  .route("/")
  .get(findAllValidator, authenticate, authorization, UserController.findAll);

router
  .route("/:id")
  .get(findValidator, authenticate, authorization, UserController.find)
  .put(updateValidator, authenticate, authorization, UserController.update)
  .delete(deleteValidator, authenticate, authorization, UserController.destroy);

module.exports = router;
