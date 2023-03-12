"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        //username: DataTypes.STRING,
        //password: DataTypes.STRING,
        //email: DataTypes.STRING,
        //fullname: DataTypes.STRING,
        //roleid: DataTypes.STRING
        username: "admin",
        password: "password",
        email: "example@example.com",
        fullname: "Nguyễn Thành Lâm",
        roleid: "admin",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
