const user = require("./User");
const { router } = require("./authorize");


module.exports = {
  authorize: router,
  user
};