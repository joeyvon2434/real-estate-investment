const router = require("express").Router();
const propertyRoutes = require("./properties");

//Property Routes set up here (in propertyRoutes.js)
router.use("/properties", propertyRoutes);

module.exports = router;