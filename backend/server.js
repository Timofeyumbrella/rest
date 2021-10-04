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

app.get("/test", (_, res) => {
  res.status(200).json({
    status: "success",
    events: [
      { id: 1, title: "this is event title taken from backend" },
      { id: 2, title: "same stuff in here" },
      { id: 3, title: "and also in here" },
      { id: 4, title: "you wouldn't believe if i tell you" },
      { id: 5, title: "some title" },
      { id: 6, title: "some title" },
      { id: 7, title: "some title" },
      { id: 8, title: "some title" },
      { id: 9, title: "some title" },
      { id: 10, title: "some title" },
      { id: 11, title: "some title" },
      { id: 12, title: "some title" },
      { id: 13, title: "some title" },
      { id: 14, title: "some title" },
    ],
  });
});

app.use("/events", eventRouter);
app.use("/user", followRouter);
app.use("/users", userRouter);
app.use("/user", authRouter);

app.use(handleExceptions);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(chalk.bold.green("server running on port " + port));

  try {
    await sequelize.authenticate({ force: true });
    console.log(chalk.bold.yellow("connected to the database"));
  } catch (error) {
    console.log(chalk.bold.red("unable to connect to the database: ", error));
  }
});
