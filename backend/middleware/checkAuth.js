const jwt = require("jsonwebtoken");
const HttpError = require("../utils/httpError");

exports.checkAuth = (req, res, next) => {
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(" ")[1]; // Authorization: Bearer <token>
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = {
            id: decodedToken.id,
            email: decodedToken.email,
            role: decodedToken.role,
            name: decodedToken.name,
        };
        next();
    } catch (error) {
        console.log(error);
        return next(new HttpError("Authentication failed", 401));
    }
};
