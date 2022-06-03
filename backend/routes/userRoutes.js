const { Router } = require("express");
const { check } = require("express-validator");
const userController = require("../controllers/userController");
const { checkAuth } = require("../utils/tokenService");

/** User Routes */
const router = Router();

// router.use(checkAuth);

router
    .route("/")
    .get(userController.getUsers)
    .post(
        [
            check("name", "Name cannot be empty").notEmpty(),
            check("email", "Please provide valid email").isEmail(),
            check(
                "password",
                "Password must be at least 6 characters long"
            ).isLength({ min: 6 }),
        ],
        userController.createUser
    )
    .put(
        checkAuth,
        [
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
        ],
        userController.updateUser
    );

router.route("/:uuid").get(userController.getUser);

router.post("/login", userController.logInUser);

module.exports = router;
