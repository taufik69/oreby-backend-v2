const mongoose = require("mongoose");
const { Schema } = mongoose;

const CatagoriesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  subCatagoris: [
    {
      type: Schema.Types.ObjectId,
      ref: "subCatagoris",
    },
  ],
  status: {
    type: String,
    emum: ["waiting", "rejected", "approved"],
    default: "waiting",
  },
  updated: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("catagories", CatagoriesSchema);
