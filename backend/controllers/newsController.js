const {News} = require("../database/models");
const catchAsync = require("../utils/catchAsync");

exports.publishNews = catchAsync(async (req, res, next) => {
    const { title, body, image, category, creatorId } = req.body;
    const news = await News.create({
        title,
        body,
        image,
        category,
        creatorId,
    });
    res.status(201).json({ news });
});