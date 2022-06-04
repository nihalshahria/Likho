"use strict";
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const { User } = require("../database/models");
const HttpError = require("../utils/httpError");
const catchAsync = require("../utils/catchAsync");
const { validationResult } = require("express-validator");
const { checker } = require("../utils/validationChecker");
const { generateToken } = require("../utils/tokenService");
const { getPagination, getPagingData } = require("../utils/pagination")

exports.createUser = catchAsync(async (req, res, next) => {
    checker(validationResult(req));

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    res.status(201).json({
        status: "success",
        data: {
            user,
            token: await generateToken(user)
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

    res.status(201).json({
        status: "success",
        data: {
            user,
            token: await generateToken(user),
        },
    });
});

// TODO: OrderBy has not been implemented
exports.getUsers = catchAsync(async (req, res, next) => {
    let { search, role, page, size } = req.query;
    search = search || "";
    role = role || "";

    const { limit, offset } = getPagination(page, size);

    const data = await User.findAndCountAll({
        where: {
            name: { [Op.iLike]: `%${search}%` },
            role: { [Op.iLike]: `%${role}%` },
        },
        limit,
        offset,
    });

    const { items: users, ...others } = getPagingData(data, page, limit);

    res.status(200).json({
        status: "success",
        data: {
            ...others,
            users
        }
    });
});

exports.getUser = catchAsync(async (req, res, next) => {
    const uuid = req.params.uuid;

    const user = await User.findOne({
        where: { uuid: uuid },
    });
    
    res.status(200).json({
        status: "success",
        data: user,
    });
});

exports.updateUser = catchAsync(async (req, res, next) => {
        

    const { id } = req.userData;

    const { name, oldPassword, newPassword } = req.body;

    const user = await User.findByPk(id);
    
    if (newPassword) {
        const isValidPassword = await bcrypt.compare(oldPassword, user.password);
        
        if (!isValidPassword)
            throw new HttpError("Invalid credentials, could not update user.", 401);
        
        user.password = await bcrypt.hash(newPassword, 12);
    }
        
    const changes = {
        name: name || undefined,
        password: user.password,
    }

    const result = await User.update(changes, { where: { id } });

    res.status(200).json({
        status: "success",
        data: {
            user: result[0] > 0 ? user : undefined,
        },
    });
});
