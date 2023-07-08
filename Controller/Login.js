const { passwordValidation } = require("../helpers/passwordValidaton");
const user = require("../Models/userModel");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(404).json({
        error: "Email Missing",
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
      // check this email already exist in database
      const isExisitEmail = await user.find({ email });
      //   const { password } = isExisitEmail[0];
      if (isExisitEmail.length > 0) {
        // checking the password is correct or not
        await bcrypt
          .compare(password, isExisitEmail[0].password)
          .then(function (result) {
            if (result) {
              res.status(200).json({
                data: {
                  sucess: "Sucessfully login ",
                },
              });
            } else {
              res.status(200).json({
                data: {
                  error: "Password does't match",
                },
              });
            }
          });
      } else {
        res.status(200).json({
          error: `Email does't match`,
        });
      }
    }
  } catch (error) {
    res.status(404).json({
      error: `from login error ${error}`,
    });
  }
};

module.exports = Login;
