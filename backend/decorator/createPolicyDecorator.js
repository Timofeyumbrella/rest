const ApiError = require("../error/ApiError");
const atob = require("atob");
const { Permission } = require("../models");

const createPolicyDecorator = (policy) => (controller) =>
  Object.fromEntries(
    Object.entries(controller).map(([key, value]) => {
      if (typeof value !== "function" || !policy[key]) return [key, value];

      const handler =
        (fn) =>
        async (...params) => {
          const [validated] = params;
          const { authorization, id } = validated;

          const { roleId, id: userId } = JSON.parse(
            atob(authorization.split(".")[1])
          ).user;

          const { dataValues: permission } = await Permission.findOne({
            where: { roleId, entity: policy.entity },
          });

          const hasAccess =
            permission[key] === "any" ||
            (permission[key] === "own" && userId === id);

          if (!(await policy[key](hasAccess))) {
            throw new ApiError(403, "Access denied");
          }

          return fn(...params);
        };

      return [key, handler(value)];
    })
  );

module.exports = createPolicyDecorator;
