const user = require("../Models/userModel");
const OtpverficationMatch = async (req, res) => {
  try {
    const { email, randomOTp } = req.body;

    const findOtp = await user.find({ email });
    if (findOtp.length > 0) {
      if (randomOTp == findOtp[0].randomOTp) {
        const removeOtpAfterMatch = await user.findOneAndUpdate(
          { email },
          { $unset: { randomOTp: "" } },
          { new: true }
        );
        res.status(200).json({
          data: {
            Message: "OTP match",
          },
        });
      } else {
        res.status(404).json({
          data: {
            Error: "OTP does't Match",
          },
        });
      }
    }
  } catch (error) {
    res.status(404).json({
      error: `From OtpverificationMatch error: ${error}`,
    });
  }
};

module.exports = OtpverficationMatch;
