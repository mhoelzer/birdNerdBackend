'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
 
  return User;
};