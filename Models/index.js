const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgresql://localhost/birdnerdTest");

const User = sequelize.import("./User");

module.exports = {
    sequelize,
    User
  };