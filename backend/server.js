require("dotenv").config();

const passport = require("passport");
require("./config/passport/localStrategy")(passport);
require("./config/passport/jwtStrategy")(passport);

const express = require("express");
const chalk = require("chalk");
const { sequelize } = require("./models");

const handleExceptions = require("./middleware/handleExceptions");

const eventRouter = require("./routes/eventRouter");
const userRouter = require("./routes/userRouter");
const followRouter = require("./routes/followRouter");
const authRouter = require("./routes/authRouter");

const app = express();

app.use(express.json());

app.use("/events", eventRouter);
app.use("/user", followRouter);
app.use("/users", userRouter);
app.use("/user", authRouter);

app.use(handleExceptions);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(chalk.bold.green("server running on port " + port));

  try {
    await sequelize.authenticate({ force: true });
    console.log(chalk.bold.yellow("connected to the database"));
  } catch (error) {
    console.log(chalk.bold.red("unable to connect to the database: ", error));
  }
});
