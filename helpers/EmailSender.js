const nodemailer = require("nodemailer");

exports.SendNodeMail = async (email, otp, template) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.HOST_MAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: "taufikislam172@gmail.com",
    to: email,
    subject: "Oreby E-commerce",
    // text: "Hello world?",
    html: template(otp),
  });
};
