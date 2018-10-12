//pull in the router portion of express and the properties controller
const router = require("express").Router();
const teamController = require("../../controllers/teamController");


//All routes are based off of the /api/team route in index.js 

//Route gets all properties and returns them to the client.
router.route("/").get(teamController.findAll);

//Route creates a new property, and should be protected to only allow logged in users
router.route("/create").post(teamController.createMember);

//Route updates / deletes a property, and should be protected to only allow logged in users
router.route("/member/:id")
.get(teamController.findOne)
.put(teamController.updateMember)
.delete(teamController.deleteMember);


//export the router for use by express
module.exports = router;