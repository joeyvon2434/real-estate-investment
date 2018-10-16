// //not sure how to set this up for an external file
// const nodemailer = require("nodemailer");

// //use auth to create a transporter and configure connection to SendGrid
// const transporter = nodemailer.createTransport({
//     service: "Sendgrid",
//     auth: {
//         user: auth.SENDGRID_USERNAME, pass: auth.SENDGRID_PASSWORD
//     }
// });

// module.exports = {

// sendEmail: (req,res) => {
//     console.log('In email controller');
//     const message = req.body.message;
//     const name = req.body.name;
//     const phone = req.body.phone;
//     const emailAddress = req.body.emailAddress;
//     transporter.sendMail({
//         from: "app111799754@heroku.com",
//         to: 'cfield2434@yahoo.com',
//         subject: `ROH Properties Interest from ${name}`,
//         html: `<h4>${name} is interested in ROH properties.</h4>
//         <ul>
//             <li>Contact information: </li>
//             <li>Name: ${name}</li>
//             <li>Email: ${emailAddress}</li>
//             <li>phone: ${phone}</li>
//         </ul>
//         <h3>Message:</h3>
//         <h4>${message}</h4>
//         `
//     }, (err, info) => {
//         if(err) {
//             res.send(err);
//         }
//         else {
//             res.status(200).json({
//                 success: true,
//                 message: 'Email Sent'
//             });
//         }
//     });
// }
// };
