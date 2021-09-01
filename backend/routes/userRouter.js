const express = require("express");
const userController = require("../controllers/userController");

const createValidator = require("../validators/user/create");
const updateValidator = require("../validators/user/update");
const findAllValidator = require("../validators/user/findAll");
const findValidator = require("../validators/user/find");
const deleteValidator = require("../validators/user/delete");

const router = express.Router();

router
  .route("/")
  .get(findAllValidator, userController.findAll)
  .post(createValidator, userController.create);

router
  .route("/:id")
  .get(findValidator, userController.find)
  .put(updateValidator, userController.update)
  .delete(deleteValidator, userController.destroy);

module.exports = router;
