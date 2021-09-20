module.exports = (filename) =>
  filename
    .split("\\")
    [filename.split("\\").length - 1].split(".")[0]
    .split("C")[0]
    .toLocaleLowerCase();
