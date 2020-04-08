const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model("products", {
  photos: [String],
  name: {
    type: String,
    required: [true, "name is required"],
  },
  categories: [
    {
      type: ObjectId,
      ref: "categories",
    },
  ],
  // likes: {
  //   type: Number,
  //   required: [true, "likes are required"]
  // },
  deliveryTime: {
    type: Number,
    required: [true, "delivery time is required"],
  },
  inStock: {
    type: Number,
    required: [true, "delivery time is required"],
  },
  options: {
    productOptions: [
      {
        name: {
          type: String,
          required: [true, "name is required"],
        },
        items: [
          {
            name: {
              type: String,
              required: [true, "name is required"],
            },
            price: {
              type: Number,
              required: [true, "price is required"],
            },
          },
        ],
      },
    ],
  },
});
