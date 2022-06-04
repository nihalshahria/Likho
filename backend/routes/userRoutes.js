const { Router } = require("express");
const { checkAuth } = require("../utils/tokenService");
const { userCreationValidators, userUpdateValidators } = require("../utils/userValidators");
const { updateUser, createUser, getUsers, getUser, logInUser } = require("../controllers/userController");

/** User Routes */
const router = Router();

router
    .route("/")
    .get(getUsers)
    .post(userCreationValidators, createUser)
    .put(checkAuth, userUpdateValidators, updateUser);

router.get("/:uuid", getUser);

router.post("/login", logInUser);

module.exports = router;
