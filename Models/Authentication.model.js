const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
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
    dob: {
      type: String,
      required: false,
    },
    roles: {
      type: Array,
      default: ["user"],
    },
  },
  addressDetails: {
    type: Array,
    required: true,
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

module.exports = mongoose.model("user", AuthSchema);
