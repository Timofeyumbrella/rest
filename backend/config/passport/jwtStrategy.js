const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const { User } = require("../../models");
const ApiError = require("../../error/ApiError");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = () =>
  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
      try {
        const user = await User.findOne({ where: { email: jwtPayload.email } });

        return done(null, user);
      } catch (error) {
        throw new ApiError(403);
      }
    })
  );
