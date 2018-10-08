//pull in express to run the backend w/ node
const express =require("express");

//pull in package for creating MongoDB models
const mongoose = require("mongoose");

//pill in the index file and all route files within to separate routes from the server file fro code cleanliness
const routes = require("./routes");

//Initialize an instance of the express app
const app = express();

//Set up middleware for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//set location of static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//set up routes in the express instance
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/real-estate-investment");

//Start the Server
app.listen(PORT, function() {
    console.log(`API server listeninig on PORT ${PORT}`);
});