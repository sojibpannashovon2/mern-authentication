const { string } = require("joi");
const mongoose = require("mongoose");

const jwt = require(`jsonwebtoken`);

const userSchema = new mongoose.Schema({
  firstName: { type: string, require: true },
  LastName: { type: string, require: true },
  email: { type: string, require: true },
  password: { type: string, require: true },
});

userSchema.methods.generateAuthToken = function () {};
