"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.sequelize.query(`CREATE TABLE "Notebook" 
   (username varchar(255) REFERENCES "Users"(username), 
   id SERIAL PRIMARY KEY,
   birdname varchar(200), 
   date timestamp,
   details varchar(2000),
   location varchar(255));`);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.sequelize.query(`DROP TABLE "Notebook";`);
  }
};
