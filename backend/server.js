"use strict";
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const http = require("http");
const morgan = require("morgan");
const express = require("express");
const multer = require("multer")

const { sequelize } = require("./database/models");
const HttpError = require("./utils/httpError");
const catchAsync = require("./utils/catchAsync");
const errorHandler = require("./controllers/errorController");
const routes = require("./routes")

const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Logger middleware
app.use(morgan("dev"));

// Process Form-Data
app.use(multer().array());

// Static route
app.use("/public/uploads", express.static(path.join("public", "uploads")));

app.use("/api", routes);

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
        server.listen(port, () => {
            console.log(`Listening to the server on http://localhost:${port}`);
        });
    } catch (err) {
        console.log("Unable to connect to the database:");
        console.log(err);
    }
};
startServer(server);
