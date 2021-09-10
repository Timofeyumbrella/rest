const { Permission } = require("../models");
const ApiError = require("../error/ApiError");

const methods = {
  POST: "create",
  GET: "read",
  PUT: "update",
  PATCH: "update",
  DELETE: "delete",
};

module.exports = (req, _, next) => {
  Permission.findOne({
    where: { roleId: req.jwtUser.roleId, entity: req.baseUrl.slice(1, -1) },
  }).then((permission) => {
    const access = permission.dataValues[methods[req.method]];

    if (access === "none") next(new ApiError(403, "Access denied"));

    if (access === "own" && !req.url.split("/")[1]) {
      next(new ApiError(403, "Users find all method is not available for you"));
    }

    if (
      access === "own" &&
      parseInt(req.url.split("/")[1]) !== req.jwtUser.id
    ) {
      next(new ApiError(403, "Access denied"));
    }

    next();
  });
};
