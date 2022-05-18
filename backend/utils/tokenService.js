const jwt = require("jsonwebtoken");
const catchAsync = require("./catchAsync");

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
        return next(new HttpError("Authentication failed", 401));
    }
};
