const mongoose = require("mongoose");

module.exports = mongoose.model("categories", {
  name: {
    type: String,
    required: [true, "name is required"]
  },
  color: {
    type: String,
    required: [true, "color is required"]
  }
});
