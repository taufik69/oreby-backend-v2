const subCatagories = require("../Models/subCatagoriesModel.js");
const Catagories = require("../Models/CatagoriesModel.js");
const createSubCatagories = async (req, res) => {
  try {
    const { name, description, catagoriesId } = req.body;
    const duplicatesubCatagories = await subCatagories.find({ name });
    if (duplicatesubCatagories.length > 0) {
      return res.status(400).json({
        Error: `This  ${duplicatesubCatagories[0].name} is exist try another`,
      });
    }
    const savesubCatagories = await new subCatagories({
      name,
      description,
      catagoriesId,
    }).save();

    // now push the subcatagories into catagories
    const updateStatus = await Catagories.findOneAndUpdate(
      { _id: savesubCatagories.catagoriesId },

      { $push: { subCatagoris: savesubCatagories } },
      {
        new: true,
      }
    );
    res.status(404).json({
      data: {
        savesubCatagories,
        updateStatus,
      },
    });
  } catch (error) {
    res.status(404).json({
      Error: `Error from catagories auth : ${error}`,
    });
  }
};

module.exports = createSubCatagories;
