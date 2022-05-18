const { Router } = require("express");

const router = Router();

router.use("/users", require("./userRoutes"));
router.use("/news", require("./newsRoutes"));

module.exports = router;
