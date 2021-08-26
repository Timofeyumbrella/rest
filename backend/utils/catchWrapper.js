const catchDecorator = require("../decorator/catchDecorator");

const catchWrapper = (controller) => {
  for (let i in controller) {
    controller[i] = catchDecorator(controller[i]);
  }
};

module.exports = catchWrapper;
