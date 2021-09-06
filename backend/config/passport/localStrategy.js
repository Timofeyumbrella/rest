const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User } = require("../../models");

const options = {
  usernameField: "email",
};

module.exports = () =>
  passport.use(
    new LocalStrategy(options, async (email, password, done) => {
      const user = await User.findOne({ where: { email } });

      if (!user) return done(null, false, { message: "Incorrect email" });

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword)
        return done(null, false, { message: "Incorrect password" });

      return done(null, user);
    })
  );
