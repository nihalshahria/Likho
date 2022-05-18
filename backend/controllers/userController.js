"use strict";
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const HttpError = require("../utils/httpError");
const catchAsync = require("../utils/catchAsync");
const { User } = require("../database/models");
const { Op } = require("sequelize");
const { checker } = require("../utils/validationChecker");
const { generateToken } = require("../utils/tokenService");

exports.createUser = catchAsync(async (req, res, next) => {
    checker(validationResult(req));

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    const token = await generateToken(user);

    res.status(201).json({
        status: "success",
        data: {
            user,
            token,
        },
    });
});

exports.logInUser = catchAsync(async (req, res, next) => {
    checker(validationResult(req));

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user)
        throw new HttpError("Invalid credentials, could not log you in.", 401);

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
        throw new HttpError("Invalid credentials, could not log you in.", 401);

    const token = await generateToken(user);

    res.status(201).json({
        status: "success",
        data: {
            user,
            token,
        },
    });
});

exports.getUsers = catchAsync(async (req, res, next) => {
    let { search, role } = req.query;
    search = search || "";
    role = role || "";

    const criteria = {
        name: { [Op.iLike]: `%${search}%` },
        role: { [Op.iLike]: `%${role}%` },
    };

    const users = await User.findAll({
        where: criteria,
    });

    res.status(200).json(users);
});

exports.getUser = catchAsync(async (req, res, next) => {
    const uuid = req.params.uuid;
    const criteria = { uuid: uuid };
    const user = await User.findOne({
        where: criteria,
    });
    res.status(200).json(user);
});

exports.updateUser = catchAsync(async (req, res, next) => {
    const { id } = req.userData;
    console.log("req.userData");
    res.status(200).json({
        status: id,
    });
});
