const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: Number,
  position: String
}, { collection: "user" });

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
