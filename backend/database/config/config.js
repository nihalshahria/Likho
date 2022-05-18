module.exports = {
    development: {
        username: process.env.DB_USER || "appuser",
        password: process.env.DB_PASS || "secret",
        database: process.env.DB_NAME || "news_blog",
        host: process.env.PSQL_HOST || "localhost",
        dialect: "postgres",
    },
    test: {
        username: process.env.DB_USER || "appuser",
        password: process.env.DB_PASS || "secret",
        database: process.env.DB_NAME || "news_blog",
        host: process.env.PSQL_HOST || "localhost",
        dialect: "postgres",
    },
    production: {
        username: process.env.DB_USER || "appuser",
        password: process.env.DB_PASS || "secret",
        database: process.env.DB_NAME || "news_blog",
        host: process.env.PSQL_HOST || "localhost",
        dialect: "postgres",
    },
};
