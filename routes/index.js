const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
    //const email = require('./email');

//API routes
router.use("/api", apiRoutes);

//Email Route
//May need to pull nodemailer config into this file
//router.use("/email", email);


//send the user the react app if no routes are hit
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;