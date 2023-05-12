const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  generalDetails: {
    cuisine: {
      type: String,
      required: true,
    },
    foodType: {
      type: String,
      required: true,
    },
    trending: {
      type: Boolean,
      default: false,
    },
    averageRating: {
      type: Number,
      default: 3,
    },
    cookingTime: {
      type: Number,
      default: 20,
    },
  },
  pricingDetails: {
    actualPrice: {
      type: Number,
      default: 0,
    },
    actualOfferPrice: {
      type: Number,
      required: false,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("food", FoodSchema);
