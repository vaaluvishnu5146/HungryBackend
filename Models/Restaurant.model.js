const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  contactDetails: {
    primaryEmail: {
      type: String,
      required: true,
    },
    primaryContactNumber: {
      type: String,
      required: true,
    },
  },
  generalDetails: {
    cusine: {
      type: Array,
      required: true,
    },
    foodType: {
      type: Array,
      required: true,
    },
    trending: {
      type: Boolean,
      default: false,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    averageRating: {
      type: Number,
      default: 3,
    },
  },
  addressDetails: {
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    branchId: {
      type: String,
      required: true,
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

module.exports = mongoose.model("restaurant", RestaurantSchema);
