"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("users", [
            {
                uuid: uuidv4(),
                name: "nihal",
                email: "nihal@gmail",
                password: "1234",
                role: "Editor",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uuid: uuidv4(),
                name: "nihal01",
                email: "nihal01@gmail",
                password: "1234",
                role: "Editor",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uuid: uuidv4(),
                name: "nihal02",
                email: "nihal02@gmail",
                password: "1234",
                role: "Editor",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uuid: uuidv4(),
                name: "nihal03",
                email: "nihal03@gmail",
                password: "1234",
                role: "General",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uuid: uuidv4(),
                name: "nihal04",
                email: "nihal04@gmail",
                password: "1234",
                role: "General",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                uuid: uuidv4(),
                name: "nihal05",
                email: "nihal05@gmail",
                password: "1234",
                role: "General",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("users", null, {});
    },
};
