const nodemailer = require("nodemailer");
require('dotenv').config();
const path = require("path");


const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASS,
  },
});



const sendMail = async(name, email, com_site, com_mail, budget, country, about, cb) => {

    const mailOptionsForCompany = {
        from :{
          name : 'DATA_EVOLVE',
          address : process.env.USER, 
        },
        to : process.env.USER,
        subject : "Inquiry from contact us Page! from " +name +" "+ email ,
        html : "<table role='presentation' style='width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;'> <tr> <td align='center' style='padding:40px 0 30px 0;background:#103949;'> <img src='https://www.dataevol.net/img/logo-white.png' alt='' width='300' style='height:auto;display:block;' /> </td> </tr> <tr> <td style='padding:36px 30px 42px 30px;'> <table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;'> <tr> <td style='padding:0 0 36px 0;color:#153643;'> <h1 style='font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;'>NEW USER CONTACTED US </h1> <p>Name:- "+name+"</p> <p>Email:- "+email+"</p> <p>Company WebSite:- "+com_site+"</p> <p>Company Email:- "+com_mail+"</p> <p>Budget:- "+budget+"</p> <p>Country:- "+country+"</p> <p>About:- "+about+"</p> </td> </tr> </table> </td> </tr> <tr> <td style='padding:30px;background:#103949;'> <table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;'> <tr> <td style='padding:0;width:50%;' align='left'> <p style='margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;'> ® DataEvolv, India 2024<br/> <a href='' style='color:#ffffff;text-decoration:underline;'>Unsubscribe</a> </p> </td> <td style='padding:0;width:50%;' align='right'> <table role='presentation' style='border-collapse:collapse;border:0;border-spacing:0;'> <tr> <td style='padding:0 0 0 10px;width:38px;'> <a href='http://www.twitter.com/' style='color:#ffffff;'><img src='https://assets.codepen.io/210284/tw_1.png' alt='Twitter' width='38' style='height:auto;display:block;border:0;' /></a> </td> <td style='padding:0 0 0 10px;width:38px;'> <a href='http://www.facebook.com/' style='color:#ffffff;'><img src='https://assets.codepen.io/210284/fb_1.png' alt='Facebook' width='38' style='height:auto;display:block;border:0;' /></a> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table>"
    };

    const mailOptionsForUser = {
      from :{
        name : 'DATA_EVOLVE',
        address : process.env.USER, 
      },
      to : email,
      subject : "Thanks for contact US!!!!",
      html : "<table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;'> <tr> <td align='center' style='padding:0;'> <table role='presentation' style='width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;'> <tr> <td align='center' style='padding:40px 0 30px 0;background:#103949;'> <img src='https://www.dataevol.net/img/logo-white.png' alt='' width='300' style='height:auto;display:block;' /> </td> </tr> <tr> <td style='padding:36px 30px 42px 30px;'> <table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;'> <tr> <td style='padding:0 0 36px 0;color:#153643;'> <h1 style='font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;'>THANKS FOR CONTACT US </h1> <p style='margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;'>'Thank you for reaching out to us! Your inquiry is important to us, and we'll be in touch shortly to assist you. In the meantime, have a wonderful day!'</p> <p style='margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;'><a href='https://www.dataevol.net/' style='color:#ee4c50;text-decoration:underline;'>Explore More..!</a></p> </td> </tr> </table> </td> </tr> <tr> <td style='padding:30px;background:#103949;'> <table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;'> <tr> <td style='padding:0;width:50%;' align='left'> <p style='margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;'> ® DataEvolv, India 2024<br/> <a href='' style='color:#ffffff;text-decoration:underline;'>Unsubscribe</a> </p> </td> <td style='padding:0;width:50%;' align='right'> <table role='presentation' style='border-collapse:collapse;border:0;border-spacing:0;'> <tr> <td style='padding:0 0 0 10px;width:38px;'> <a href='http://www.twitter.com/' style='color:#ffffff;'><img src='https://assets.codepen.io/210284/tw_1.png' alt='Twitter' width='38' style='height:auto;display:block;border:0;' /></a> </td> <td style='padding:0 0 0 10px;width:38px;'> <a href='http://www.facebook.com/' style='color:#ffffff;'><img src='https://assets.codepen.io/210284/fb_1.png' alt='Facebook' width='38' style='height:auto;display:block;border:0;' /></a> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table>"
  };
  
    try {
      await transporter.sendMail(mailOptionsForCompany);
      await transporter.sendMail(mailOptionsForUser);

      console.log('Email Sent!!');
    }
    catch(err) {
      console.error(err);
    }
}

module.exports = {
    sendMail
};
