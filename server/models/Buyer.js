import mongoose from "mongoose";
const Schema = mongoose.Schema;

import "./Product.js";
import "./User.js";

const BuyerSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    targetId: { type: Schema.Types.ObjectId, ref: "Products" },
    isFeedback: { type: Boolean, default: false },
  },
  {
    collection: "buyers",
    timestamps: true,
  }
);

export default mongoose.model("Buyer", BuyerSchema);
