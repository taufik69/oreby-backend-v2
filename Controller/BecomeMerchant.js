const { emailvalidator } = require("../helpers/emailValidator.js");
const { userNameValidate } = require("../helpers/userNameHelpers.js");
const { phoneNumberValidatorBD } = require("../helpers/PhoneNumberCheckBD.js");
const store = require("../Models/merchantModel.js");
const user = require("../Models/userModel.js");
const becomeMerchant = async (req, res) => {
  try {
    const { storeName, officialEmail, officailPhone, address, owner, product } =
      req.body;

    if (!storeName || !userNameValidate(storeName, 4, 15)) {
      return res.status(404).json({
        error: "storeName Missing or Storename contain 4 to 15 chractar",
      });
    }

    if (!officialEmail || !emailvalidator(officialEmail)) {
      return res.status(404).json({
        error: "officialEmail Missing or format missing",
      });
    } else if (!officailPhone || !phoneNumberValidatorBD(officailPhone)) {
      return res.status(404).json({
        error: "officialPhone Missing or format Wrong",
      });
    } else if (!address) {
      return res.status(404).json({
        error: "adress  Missing",
      });
    } else {
      const saveDatastore = new store({
        storeName,
        officialEmail,
        officailPhone,
        address,
        owner,
        // product,
      });
      saveDatastore.save();
      // Checkign store database if data hava
      const checkStoreData = await store.find({});
      if (checkStoreData.length == 0) {
        return res.status(200).json({
          message: "Store have no Data Blank",
        });
      }

      // Now update the user role
      const updateUserRole = await user.findOneAndUpdate(
        { _id: owner },
        { role: "merchant" },
        { new: true }
      );
      res.status(404).json({
        storeName,
        officialEmail,
        officailPhone,
        address,
        owner,
        // product,
        updateUserRole: { updateUserRole },
      });
    }
  } catch (error) {
    res.status(404).json({
      error: `from becomemarchant ${error}`,
    });
  }
};

module.exports = becomeMerchant;
