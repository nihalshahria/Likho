const { check } = require("express-validator");

exports.newsPublishValidators = [
    check("title", "Title cannot be empty").notEmpty(),
    check("body", "Body cannot be empty").notEmpty(),
    check("category", "Category cannot be empty").notEmpty(),
];

exports.newsUpdateValidators = [
    check("title", "Title cannot be empty").notEmpty(),
    check("body", "Body cannot be empty").notEmpty(),
    check("category", "Category cannot be empty").notEmpty(),
];