const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  this.username = this.username.toLowerCase();
  next();
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
