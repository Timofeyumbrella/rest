const { Permission } = require("../models");
const ApiError = require("../error/ApiError");

const methods = {
  POST: "create",
  GET: "read",
  PUT: "update",
  PATCH: "update",
  DELETE: "delete",
};

module.exports = async (req, _, next) => {
  try {
    const permission = await Permission.findOne({
      where: { roleId: req.jwtUser.roleId, entity: req.baseUrl.slice(1, -1) },
    });

    const access = permission.dataValues[methods[req.method]];

    (access === "none" ||
      (access === "own" && req.params.id !== req.jwtUser.id)) &&
      next(new ApiError(403, "Access denied"));

    next();
  } catch (error) {
    next(error);
  }
};
