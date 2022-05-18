const { Router } = require("express");
const { check } = require("express-validator");
const userController = require("../controllers/userController");
const { checkAuth } = require("../utils/tokenService");

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
    .put(checkAuth, userController.updateUser)

router.route("/:uuid").get(userController.getUser);

router.post("/login", userController.logInUser);


module.exports = router;
