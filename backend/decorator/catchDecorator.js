const catchDecorator = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next))
    .then(() => res.status(200).json({ status: "success", data: res.data }))
    .catch(next);
};

module.exports = catchDecorator;
