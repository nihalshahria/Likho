const mcache = require("memory-cache");

exports.cache = (duration) => {
    return (req, res, next) => {
        const key = "_express_" + req.originalUrl || req.url;
        // console.log(key);
        const cachedBody = mcache.get(key);
        if (cachedBody) {
            res.json(cachedBody);
            return;
        } else {
            // console.log("cache miss");
            res.sendResponse = res.json;
            res.json = (body) => {
                if (body.status !== "error") {
                    mcache.put(key, body, duration * 1000);
                }
                res.sendResponse(body);
            };
            next();
        }
    };
};
