const catagories = require("../Models/CatagoriesModel");
const getAllCatagories = async (req, res) => {
  const getAllCatagoriesdata = await catagories
    .find({})
    .populate("subCatagoris");
  res.send(getAllCatagoriesdata);
};

module.exports = getAllCatagories;
