"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class News extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ User }) {
            // define association here
            this.belongsTo(User, { foreignKey: "creatorId", as: "user" });
        }

        toJSON() {
            return { ...this.get(), id: undefined, creatorId: undefined };
        }
    }
    News.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                validate: {
                    isUUID: 4,
                },
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            body: {
                type: DataTypes.STRING,
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
        },
        {
            sequelize,
            tableName: "news",
            modelName: "News",
        }
    );
    return News;
};
