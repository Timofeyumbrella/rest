require("dotenv").config();

const express = require("express");
const chalk = require("chalk");
const eventRouter = require("./routes/eventRouter");

const app = express();

app.use(express.json());

app.use("/events", eventRouter);

app.use((err, _, res, __) => {
  res.status(err.message).json({
    status: "fail",
    description: err.description,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(chalk.bold.green("server running on port " + port));
});
