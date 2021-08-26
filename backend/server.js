require("dotenv").config();

const express = require("express");
const chalk = require("chalk");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(chalk.bold.green("server running on port " + port));
});
