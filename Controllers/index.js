const user = require("./User");
const { router } = require("./Authorize");


module.exports = {
  authorize: router,
  user
};