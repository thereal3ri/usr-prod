const sequelize = require("../db/database");
const User = require("../models/user");

(async () => {
  await sequelize.sync({
    alter: true,
    force: true,
  });

  const users = User.bulkCreate([
    {
      id: "95e6a1e8-11cc-45f7-abd4-75af3eb4bc59",
      name: "Alice Johnson",
      age: 28,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    },
    {
      id: "2e1e4864-0b77-4105-9373-8229b6c038d3",
      name: "Bob Smith",
      age: 34,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    },
    {
      id: "d2b5d78b-1fbf-4ced-974a-9963cceaa4ae",
      name: "Catherine Lee",
      age: 23,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    },
    {
      id: "5325fdf7-024d-4754-84b3-026f645e5886",
      name: "Daniel Wilson",
      age: 45,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    },
    {
      id: "601f556f-ec82-4e6d-bfb3-c77c3b2331b8",
      name: "Eva Davis",
      age: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    },
  ]);
})();
