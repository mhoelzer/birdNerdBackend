'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

   return queryInterface.sequelize
   .query(`CREATE TABLE "Users" 
   (username varchar(255) PRIMARY KEY, 
   password varchar(255), 
   about varchar(255),
   image varchar(255));`)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

   return queryInterface.sequelize
   .query(`DROP TABLE "Users";`)
  }
};
