const { validationResult } = require("express-validator");
const { News } = require("../database/models");
const catchAsync = require("../utils/catchAsync");
const { checker } = require("../utils/validationChecker");

exports.publishNews = catchAsync(async (req, res, next) => {
    checker(validationResult(req));

    const { title, body, image, category } = req.body;
    const user = req.userData;

    if (user.role === "General")
        throw new HttpError("You are not authorized to publish news", 401);

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
