const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model("menus", {
  menuCategories: [
    {
      name: {
        type: String,
        required: [true, "name is required"]
      },
      items: [
        {
          name: {
            type: String,
            required: [true, "name is required"]
          },
          price: {
            type: Number,
            required: [true, "price is required"]
          }
        }
      ]
    }
  ]
});
