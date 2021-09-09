const express = require("express");
const UserController = require("../controllers/UserController");

const updateValidator = require("../validators/user/update");
const findAllValidator = require("../validators/user/findAll");
const findValidator = require("../validators/user/find");
const deleteValidator = require("../validators/user/delete");

const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.route("/").get(findAllValidator, authenticate, UserController.findAll);

router
  .route("/:id")
  .get(findValidator, authenticate, UserController.find)
  .put(updateValidator, authenticate, UserController.update)
  .delete(deleteValidator, authenticate, UserController.destroy);

module.exports = router;
