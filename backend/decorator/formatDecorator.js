const responseDecorator = (fn) => async (req, res, next) => {
  try {
    const data = await fn(req.validated);

    res.status(200).json({
      status: "success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = (controller) =>
  Object.fromEntries(
    Object.entries(controller).map(([key, value]) => [
      key,
      responseDecorator(value),
    ])
  );
