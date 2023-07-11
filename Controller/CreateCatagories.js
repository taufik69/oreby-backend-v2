const Catagories = require("../Models/CatagoriesModel.js");
const createCatagories = async (req, res) => {
  try {
    const { name, description } = req.body;
    const duplicateCatagoriesName = await Catagories.find({ name });
    if (duplicateCatagoriesName.length > 0) {
      return res.status(400).json({
        Error: `This  ${duplicateCatagoriesName[0].name} is exist try another`,
      });
    }
    const saveCatagories = await new Catagories({
      name,
      description,
    }).save();
    res.status(404).json({
      data: {
        name,
        description,
      },
    });
  } catch (error) {
    res.status(404).json({
      Error: `Error from catagories auth : ${error}`,
    });
  }
};

module.exports = createCatagories;
