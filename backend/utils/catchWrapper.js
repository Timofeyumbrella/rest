const catchDecorator = require("../decorator/catchDecorator");

const catchWrapper = (controller) =>
  Object.fromEntries(
    Object.entries(controller).map(([key, value]) => [
      key,
      catchDecorator(value),
    ])
  );

module.exports = catchWrapper;
