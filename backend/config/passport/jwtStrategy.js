const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const { User } = require("../../models");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

module.exports = (passport) =>
  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
      try {
        const user = await User.find({ where: { email: jwtPayload.email } });

        if (!user) return done(null, false);

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );
