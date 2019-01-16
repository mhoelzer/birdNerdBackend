const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = sequelize.import("./User");

module.exports = {
    sequelize,
    User
  };