const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model("restaurants", {
  photos: [String],
  name: {
    type: String,
    required: [true, "name is required"]
  },
  category: {
    type: ObjectId,
    ref: "categories"
  },
  likes: {
    type: Number,
    required: [true, "likes are required"]
  },
  deliveryTime: {
    type: Number,
    required: [true, "delivery time is required"]
  },
  menu: {
    type: ObjectId,
    ref: "menus"
  }
});
