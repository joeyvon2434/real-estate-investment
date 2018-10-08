const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//API routes
router.use("/api", apiRoutes);

//send the user the react app if no routes are hit
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;