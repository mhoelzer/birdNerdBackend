'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {type: DataTypes.STRING, primaryKey:true},
    password: DataTypes.STRING,
    about: DataTypes.STRING,
    image: DataTypes.STRING
  }, {timestamps:false});
 
  return User;
};