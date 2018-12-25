const path = require("path");

const resolve = function(dir) {
  return path.join(__dirname, "..", dir);
};

module.exports = {
  resolve
};
