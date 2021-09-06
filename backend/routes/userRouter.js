const express = require("express");
const UserController = require("../controllers/UserController");

const updateValidator = require("../validators/user/update");
const findAllValidator = require("../validators/user/findAll");
const findValidator = require("../validators/user/find");
const deleteValidator = require("../validators/user/delete");

const router = express.Router();

router.route("/").get(findAllValidator, UserController.findAll);

router
  .route("/:id")
  .get(findValidator, UserController.find)
  .put(updateValidator, UserController.update)
  .delete(deleteValidator, UserController.destroy);

module.exports = router;
