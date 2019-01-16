"use strict";
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define(
    "Notebook",
    {
      username: { type: DataTypes.STRING },
      birdname: DataTypes.STRING,
      date: DataTypes.DATE,
      details: DataTypes.STRING,
      location: DataTypes.STRING
    },
    { timestamps: false, tableName: "Notebook" }
  );
  return Notebook;
};
