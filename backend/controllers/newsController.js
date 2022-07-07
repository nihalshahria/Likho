const { validationResult } = require("express-validator");
const { Op, where } = require("sequelize");
const { News, User } = require("../database/models");
const catchAsync = require("../utils/catchAsync");
const HttpError = require("../utils/httpError");
const { getPagination, getPagingData } = require("../utils/pagination");
const { checker } = require("../utils/validationChecker");

exports.getAllNews = catchAsync(async (req, res, next) => {
    checker(validationResult(req));

    let { search, page, size, userId } = req.query;
    search = search || "";

    const { limit, offset } = getPagination(page, size);
    const data = await News.findAndCountAll({
        where: {
            [Op.and]: [
                {
                    [Op.or]: [
                        { title: { [Op.iLike]: `%${search}%` } },
                        { body: { [Op.iLike]: `%${search}%` } },
                    ],
                },
            ],
        },
        include: {
            association: "user",
            // where: { uuid: userId || undefined}
        },
        limit,
        offset,
    });

    const { items: news, ...others } = getPagingData(data, page, limit);

    res.status(200).json({
        status: "success",
        data: {
            ...others,
            news,
        },
    });
});

exports.getNews = catchAsync(async (req, res, next) => {
    const uuid = req.params.uuid;

    const news = await News.findOne({
        where: { uuid: uuid },
        include: {association: "user",},
    });

    res.status(200).json({
        status: "success",
        data: news,
    });
});

exports.publishNews = catchAsync(async (req, res, next) => {
    checker(validationResult(req));

    const { title, body, image, category } = req.body;
    const user = req.userData;
    console.log(user);
    // if (user.role === "General")
    //     throw new HttpError("You are not authorized to publish news", 401);

    const news = await News.create({
        title,
        body,
        image,
        category,
        creatorId: user.id,
    });

    res.status(201).json({ news });
});

exports.updateNews = catchAsync(async (req, res, next) => {
    checker(validationResult(req));

    const { title, body, image, category } = req.body;
    const user = req.userData;
    const uuid = req.params.uuid;

    const news = await News.findOne({ where: { uuid: uuid } });

    if (!news) throw new HttpError("News not found", 404);

    if (user.role === "Admin" || user.id === news.creatorId) {
        const result = await news.update(
            {
                title: title || undefined,
                body: body || undefined,
                image: image || undefined,
                category: category || undefined,
            },
            { where: { uuid: uuid } }
        );

        res.status(200).json({
            status: "success",
            data: result[0] > 0 ? user : undefined,
        });
    } else {
        throw new HttpError("You are not authorized to update this news", 401);
    }
});

exports.deleteNews = catchAsync(async (req, res, next) => {
    const user = req.userData;
    const uuid = req.params.uuid;

    const news = await News.findOne({ where: { uuid: uuid } });

    if (!news) throw new HttpError("News not found", 404);

    if (user.role === "Admin" || user.id === news.creatorId) {
        const result = await news.destroy();

        res.status(200).json({
            status: "success",
            message: "News deleted",
        });
    } else {
        throw new HttpError("You are not authorized to delete this news", 401);
    }
});
