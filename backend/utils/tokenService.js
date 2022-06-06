const jwt = require("jsonwebtoken");
const catchAsync = require("./catchAsync");
const HttpError = require("./httpError");

exports.generateToken = async (user) => {
    return await jwt.sign(
        {
            id: user.id,
            uuid: user.uuid,
            email: user.email,
            name: user.name,
            role: user.role,
        },
        process.env.JWT_KEY,
        { expiresIn: "6d" }
    );
};