//pull in express to run the backend w/ node
const express = require("express");

//body parser
const bodyParser = require("body-parser");

//Pull in nodemailer package
const nodemailer = require("nodemailer");

//pull in package for creating MongoDB models
const mongoose = require("mongoose");

//pull in the index file and all route files within to separate routes from the server file fro code cleanliness
const routes = require("./routes");

//Initialize an instance of the express app
const app = express();
const PORT = process.env.PORT || 3001;

//Set up middleware for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set location of static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

//Nodemailer authorization and configuration
    //Set auth based on dev or production
let auth= '';
if (process.env.NODE_ENV === 'production') {
    auth = process.env;
}
else {
    auth = require('./config.json');
};

//use auth to create a transporter and configure connection to SendGrid
const transporter = nodemailer.createTransport({
    service: "Sendgrid",
    auth: {
        user: auth.SENDGRID_USERNAME, pass: auth.SENDGRID_PASSWORD
    }
});
app.post('/sendEmail', (req,res) => {
    const message = req.body.message;
    const name = req.body.name;
    const phone = req.body.phone;
    const emailAddress = req.body.emailAddress;
    transporter.sendMail({
        from: "app111799754@heroku.com",
        to: 'cfield2434@yahoo.com',
        subject: `ROH Properties Interest from ${name}`,
        html: `<h4>${name} is interested in ROH properties.</h4>
        <ul>
            <li>Contact information: </li>
            <li>Name: ${name}</li>
            <li>Email: ${emailAddress}</li>
            <li>phone: ${phone}</li>
        </ul>
        <h3>Message:</h3>
        <h4>${message}</h4>
        `
    }, (err, info) => {
        if(err) {
            res.send(err);
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Email Sent'
            });
        }
    });
});


//set up routes in the express instance
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/real-estate-investment"
    );

//Start the Server
app.listen(PORT, function() {
    console.log(`API server listening on PORT ${PORT}`);
});