const mongoose = require("mongoose");
const { Schema } = mongoose;

const storeSchema = new Schema({
  storeName: {
    type: String,
    require: true,
  },
  officialEmail: {
    type: String,
    require: true,
  },

  officailPhone: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  status: {
    type: String,
    enum: ["waiting", "rejected", "Approved"],
    default: "waiting",
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  updated: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("store", storeSchema);
