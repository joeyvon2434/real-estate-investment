const router = require("express").Router();
const propertyRoutes = require("./properties");
const teammembers = require("./teammembers");
    //const email = require("./email");

//Property Routes set up here (in propertyRoutes.js)
router.use("/properties", propertyRoutes);

router.use("/team", teammembers);

    //router.use("/send-email-message", email);

module.exports = router;
