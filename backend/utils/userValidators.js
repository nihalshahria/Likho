const { check } = require("express-validator");

exports.userCreationValidators = [
    check("name", "Name cannot be empty").notEmpty(),
    check("email", "Please provide valid email").isEmail(),
    check("password", "Password must be at least 6 characters long").isLength({
        min: 6,
    }),
];

exports.userUpdateValidators = [
    check(
        "newPassword",
        "Password must be at least 6 characters long and different from the old one"
    ).custom((val, { req }) => {
        if (
            !req.body.oldPassword ||
            (val !== req.body.oldPassword && val.length >= 6)
        )
            return true;
        throw new Error();
    }),
];
