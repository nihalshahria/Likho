"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ News }) {
            // define association here
            this.hasMany(News, { foreignKey: "creatorId" });
        }

        toJSON() {
            return { ...this.get(), id: undefined, password: undefined };
        }
    }
    User.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                validate: {
                    isUUID: 4,
                },
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isAlpha: {
                        msg: "Name can only contain letters",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: "Email is not valid",
                    },
                },
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: "General",
                validate: {
                    isIn: {
                        args: [["General", "Editor", "Admin"]],
                        msg: "Role is not valid",
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "users",
            modelName: "User",
        }
    );
    return User;
};
