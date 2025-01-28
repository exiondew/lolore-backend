const sanitize = require("./sanitize");
const championValidator = require("./champion.validator");
const globalValidator = require("./global.validator");

module.exports = {
  sanitize,
  ...championValidator,
  ...globalValidator,
};
