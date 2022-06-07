"use strict";
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable("news", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            creatorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                }
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },
    async down(queryInterface, DataTypes) {
        await queryInterface.dropTable("news");
    },
};
