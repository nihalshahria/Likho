require("dotenv").config();
const { Sequelize } = require("sequelize");
exports.sequelize = new Sequelize(
    process.env.DB_NAME || "news_blog",
    process.env.DB_USER || "appuser",
    process.env.DB_PASS || "secret",
    {
        host: process.env.PSQL_HOST || "localhost",
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);
