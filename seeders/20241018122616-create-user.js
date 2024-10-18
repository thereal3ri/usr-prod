"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: Sequelize.UUIDV4(),
          name: "Alice Johnson",
          age: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
        {
          id: Sequelize.UUIDV4(),
          name: "Bob Smith",
          age: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
        {
          id: Sequelize.UUIDV4(),
          name: "Catherine Lee",
          age: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
        {
          id: Sequelize.UUIDV4(),
          name: "Daniel Wilson",
          age: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
        {
          id: Sequelize.UUIDV4(),
          name: "Eva Davis",
          age: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
