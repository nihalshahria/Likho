const { Sequelize, DataTypes } = require("sequelize");
const users = require("./seedData/usersData.json");
const User = require("../models/User");

module.exports = async () => {
    try {
        if (await User.count() === 0) {
            const createdUsers = await User.bulkCreate(users);
            console.log("seed success");
        }
    } catch (err) {
    }
};
