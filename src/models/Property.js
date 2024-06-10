const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    propertyTitle: {
      type: String,
      required: true,
    },
    destinationURL: {
      type: String,
      required: false,
      default: "",
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
