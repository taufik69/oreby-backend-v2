const subCatagories = require("../Models/subCatagoriesModel.js");
const subCatagoriesStatus = async (req, res) => {
  try {
    const { name, status } = req.body;

    // update the status field by find one and update method

    if (status == "waiting" || status == "rejected") {
      const updateStatus = await subCatagories.findOneAndUpdate(
        { name },
        { $set: { isActive: false, status: status } },
        {
          new: true,
        }
      );
      res.status(200).json({
        data: {
          sucess: "Your Status update ",
          updateStatus,
        },
      });
    } else if (status == "approved") {
      const updateStatus = await subCatagories.findOneAndUpdate(
        { name },

        { $set: { isActive: true, status: status } },
        {
          new: true,
        }
      );
      res.status(200).json({
        data: {
          sucess: "Your Status Approved ",
          updateStatus,
        },
      });
    }
  } catch (error) {
    res.status(404).json({
      Error: `Error from catagories auth : ${error}`,
    });
  }
};

module.exports = subCatagoriesStatus;
