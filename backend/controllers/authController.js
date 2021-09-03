const { User } = require("../models");

const bcrypt = require("bcrypt");

const authController = {
  register: async (req, res) => {
    const { password, ...otherData } = req.body;

    const user = await User.create({
      password: await bcrypt.hash(password, 10),
      ...otherData,
    });

    res.status(200).json({
      status: "success",
      user,
    });
  },

  // login: (_, res) => {
  //   res.redirect("/user/profile");
  // },
};

module.exports = authController;
