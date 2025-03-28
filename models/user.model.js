const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true
    },
    mobile: {
      type: String,
      unique: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
