const ApiError = require("../error/ApiError");

const createPolicyDecorator = (policy) => (controller) =>
  Object.fromEntries(
    Object.entries(controller).map(([key, value]) => {
      if (typeof value !== "function" || !policy[key]) return [key, value];

      const handler =
        (fn) =>
        async (...params) => {
          if (!(await policy[key](...params))) {
            throw new ApiError(403, "Access denied");
          }

          return fn(...params);
        };

      return [key, handler(value)];
    })
  );

module.exports = createPolicyDecorator;
