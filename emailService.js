// emailService.js
const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'santiago50@ethereal.email',
        pass: '9k6xmdUn2FqksWNB5W'
    }
});

// Function to send an email
const sendEmail = () => {
  const mailOptions = {
    from: '"Dushyant Odedra" <dushyant@gmail.com>',
    to: "dushyant.odedra21@gmail.com",
    subject: "Hello Dushyant",
    text: "Hello Dushyant",
    html: "<h1>Hello Dushyant</h1>",
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendEmail,
};
