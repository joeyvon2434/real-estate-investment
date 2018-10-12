const router = require("express").Router();
const propertyRoutes = require("./properties");
const teammembers = require("./teammembers");

//Property Routes set up here (in propertyRoutes.js)
router.use("/properties", propertyRoutes);

router.use("/team", teammembers);

module.exports = router;