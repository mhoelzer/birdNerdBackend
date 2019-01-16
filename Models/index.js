const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = sequelize.import("./User");
const Notebook = sequelize.import("./Notebook");

module.exports = {
    sequelize,
    User,
    Notebook
  };