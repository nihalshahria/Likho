const { Router } = require("express");
const { check } = require("express-validator");
const newsController = require("../controllers/newsController");

/** News Routes */
const router = Router();

router.route("/").post(newsController.publishNews);

module.exports = router;