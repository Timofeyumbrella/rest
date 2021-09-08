const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = () =>
  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
      try {
        if (!jwtPayload.user) return done(null, false);

        return done(null, jwtPayload.user);
      } catch (error) {
        return done(error, false);
      }
    })
  );
