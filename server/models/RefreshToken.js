import mongoose from "mongoose";
const Schema = mongoose.Schema;
import "./User.js";

const RefreshTokenSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    refreshToken: { type: String, required: true },
  },
  {
    collection: "refreshtokens",
    timestamps: true,
  }
);

export default mongoose.model("RefreshToken", RefreshTokenSchema);
