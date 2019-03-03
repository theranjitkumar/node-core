var nodemailer = require('nodemailer');

var EMD = {};

EMD.dispatchMail = function () {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nodedevelopertest@gmail.com',
      pass: 'nodetest'
    }
  });

  var mailOptions = {
    from: 'nodedevelopertest@gmail.com',
    to: 'web.ranjitkumar@gmail.com',
    subject: 'Test Mail',
    html: `
    Hi, 
    <br> 
    <p>Your are registerd as new member in abhishek networking </p>
    <p> Your temprary password is  </p>
    <p> <a href="#"> Click Me </a> for reset your password and update your profile </p>
    <br>
    <p> <strong> Best Regards & Good Luck </strong> </p>
    <p> Abhisekh Networking </p>
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response + '\n' + mailOptions.to);
    }
  });
}

module.exports = EMD;
