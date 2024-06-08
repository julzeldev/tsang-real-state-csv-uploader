const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  property_title: {
    type: String,
    required: true,
  },
  url_destination: {
    type: String,
    required: false,
    default: "",
  },
  status: {
    type: String,
    required: true,
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
