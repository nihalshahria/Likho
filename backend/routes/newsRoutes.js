const { Router } = require("express");
const { checkAuth } = require("../utils/tokenService");
const { publishNews, updateNews } = require("../controllers/newsController");
const { newsPublishValidators, newsUpdateValidators } = require("../utils/newsValidators");

/** News Routes */
const router = Router();

// router.get("/", getNews);
// router.get("/:uuid", getNewsById);

router.use(checkAuth);

router
    .route("/")
    .post(newsPublishValidators, publishNews)
    .put(newsUpdateValidators, updateNews);
    // .get("/:uuid", getNews);

module.exports = router;