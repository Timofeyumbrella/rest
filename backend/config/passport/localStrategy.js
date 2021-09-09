const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const { User } = require("../../models");
const ApiError = require("../../error/ApiError");

const options = {
  usernameField: "email",
};

module.exports = () =>
  passport.use(
    new LocalStrategy(options, async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
          throw new ApiError(401, "user with that email doesn't exist");
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) throw new ApiError(401, "incorrect password");

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
