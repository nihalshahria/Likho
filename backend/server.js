require("dotenv").config();
const path = require("path");
const cors = require("cors");
const http = require("http");
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");

const seed = require("./data/seed");
const HttpError = require("./models/httpError");
const catchAsync = require("./utils/catchAsync");
const { sequelize } = require("./config/db_config");
const errorHandler = require("./controllers/errorController");

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(cors());

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use(morgan("dev"));

// Static route
app.use("/public/uploads", express.static(path.join("public", "uploads")));

// Routes

// Invalid routes
app.use(
    catchAsync((req, res, next) => {
        throw new HttpError("Could not find this route", 404);
    })
);

// Error handler
app.use(errorHandler);

// Start server
const startServer = async (server) => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        await seed();
        server.listen(port, () => {
            console.log(`Listening to the server on http://localhost:${port}`);
        });
    } catch (err) {
        console.log("Unable to connect to the database:");
        console.log(err);
    }
};
startServer(server);
