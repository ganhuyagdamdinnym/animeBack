import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: { type: String, require: true },
});
export const UserModel =
  mongoose.models.user || mongoose.model("user", UserSchema);
