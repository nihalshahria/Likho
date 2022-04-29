const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");

module.exports = catchAsync((req, res, next) => {
    if (req.method === "OPTIONS") {
        next();
    }
    const token = req.headers.authorization.split(" ")[1]; // Authorization: Bearer <token>
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = {
        id: decodedToken.id,
        email: decodedToken.email,
        role: decodedToken.role,
        name: decodedToken.name,
    };
    next();
});
