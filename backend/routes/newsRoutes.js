const { Router } = require("express");
const { checkAuth } = require("../utils/tokenService");
const { publishNews, updateNews, deleteNews, getAllNews, getNews } = require("../controllers/newsController");
const { newsPublishValidators, newsUpdateValidators } = require("../utils/newsValidators");

/** News Routes */
const router = Router();

router.get("/", getAllNews);
router.get("/:uuid", getNews);

router.use(checkAuth); // All routes below this line require authentication

router
    .route("/")
    .post(newsPublishValidators, publishNews)
    .put(newsUpdateValidators, updateNews)

router.delete("/:uuid", deleteNews);

module.exports = router;