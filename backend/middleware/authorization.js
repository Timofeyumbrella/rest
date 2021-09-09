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
    const access = permission[methods[req.method]];

    if (access === "none") return next(new ApiError(403, "Access denied"));
  });

  next();
};
