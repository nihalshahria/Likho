const { Router } = require("express");
const { publishNews, updateNews, deleteNews, getAllNews, getNews } = require("../controllers/newsController");
const { cache } = require("../middleware/cache");
const { checkAuth } = require("../middleware/checkAuth");
const { newsPublishValidators, newsUpdateValidators } = require("../middleware/newsValidators");

/** News Routes */
const router = Router();

router.get("/", cache(10), getAllNews);
router.get("/:uuid", getNews);

router.use(checkAuth); // All routes below this line require authentication

router
    .route("/")
    .post(newsPublishValidators, publishNews);
    
router.put("/:uuid", newsUpdateValidators, updateNews)

router.delete("/:uuid", deleteNews);

module.exports = router;