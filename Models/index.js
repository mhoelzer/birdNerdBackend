const Sequelize = require("sequelize");
// const aws = require('aws-sdk');

// let s3 = new aws.S3({
//   accessKeyId: process.env.S3_KEY,
//   secretAccessKey: process.env.S3_SECRET
// });
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = sequelize.import("./User");
const Notebook = sequelize.import("./Notebook");

module.exports = {
    sequelize,
    User,
    Notebook
  };