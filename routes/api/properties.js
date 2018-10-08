//pull in the router portion of express and the properties controller
const router = require("express").Router();
const propertiesController = require("../../controllers/propertiesController");


//All routes are based off of the /api/properties route in index.js 

//Route gets all properties and returns them to the client.
router.route("/").get(propertiesController.findAll);

//Route gets sold properties and returns them to the user
router.route("/sold").get(propertiesController.findSold);

//Route gets current properties and returns them to the user
router.route("/current").get(propertiesController.findCurrent);

//Route creates a new property, and should be protected to only allow logged in users
router.route("/create").post(propertiesController.createProperty);

//Route updates / deletes a property, and should be protected to only allow logged in users
router.route("/property/:id")
.get(propertiesController.findOne)
.put(propertiesController.updateProperty)
.delete(propertiesController.deleteProperty);


//export the router for use by express
module.exports = router;