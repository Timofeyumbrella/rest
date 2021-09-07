const passport = require("passport");
const ApiError = require("../error/ApiError");

module.exports = (req, res, next) =>
  passport.authenticate("jwt", { session: false }, (_, user) => {
    if (!user) throw new ApiError(403);

    next();
  })(req, res, next);
