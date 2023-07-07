const { userNameValidate } = require("../helpers/userNameHelpers");
const { emailvalidator } = require("../helpers/emailValidator");
const { passwordValidation } = require("../helpers/passwordValidaton");
const user = require("../Models/userModel");
const bcrypt = require("bcrypt");
const { SendNodeMail } = require("../helpers/EmailSender.js");
const { OtpTemplate } = require("../helpers/OtpTemplate.js");

const registration = async (req, res) => {
  try {
    const { fullName, email, password, avatar, facebookId, linkedinId } =
      req.body;
    if (!fullName) {
      return res.status(404).json({
        error: "FullName Missing",
      });
    } else if (!userNameValidate(fullName, 4, 16)) {
      return res.status(404).json({
        error: "Fullname must contain min 5 & max 16",
      });
    } else if (!email) {
      return res.status(404).json({
        error: "Email Missing",
      });
    } else if (!emailvalidator(email)) {
      return res.status(404).json({
        error: "email does not valid ",
      });
    } else if (!password) {
      return res.status(404).json({
        error: " Password Missing",
      });
    } else if (!passwordValidation(password)) {
      return res.status(404).json({
        error:
          " Minimum eight characters, at least one letter, one number and one special character",
      });
    } else {
      const duplicateEmail = await user.find({ email: email });
      if (duplicateEmail.length > 0) {
        return res.status(404).json({
          Error: "Alreaday use this email , try email another",
        });
      }

      // converting plain passward to hash password trough bycrpt npm pakage
      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
          console.log("error from bcrypt npm pakage ");
        }
        const userData = await new user({
          fullName,
          email,
          password: hash,
          avatar,
          facebookId,
          linkedinId,
        }).save();

        // After completely store data in database
        SendNodeMail(email, "246", OtpTemplate);
        res.status(200).json({
          data: {
            sucess: "Please check your email for OTP",
            message: "Succesfully registration",
          },
        });
      });
    }
  } catch (error) {
    res.status(404).json({
      error: `from registration route ${error}`,
    });
  }
};
module.exports = registration;
