const { Router } = require("express");
const { updateUser, createUser, getUsers, getUser, logInUser } = require("../controllers/userController");
const { checkAuth } = require("../middleware/checkAuth");
const { userCreationValidators, userUpdateValidators } = require("../middleware/userValidators");

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
