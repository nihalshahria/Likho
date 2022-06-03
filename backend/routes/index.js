const userRoutes = require("./userRoutes");
const newsRoutes = require("./newsRoutes");
const { Router } = require("express");

/** Routes Middlewares */
const router = Router();

router.use("/users", userRoutes);
router.use("/news", newsRoutes);

module.exports = router;
