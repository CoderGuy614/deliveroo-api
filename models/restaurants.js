const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model("restaurants", {
  images: [String],
  title: {
    type: String,
    required: [true, "4 images are required"]
  },
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
  time: {
    type: Number,
    required: [true, "delivery time is required"]
  },
  menu: {
    type: ObjectId,
    ref: "menus"
  }
});
