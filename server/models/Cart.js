import mongoose from "mongoose";
const Schema = mongoose.Schema;

import "./Product.js";
import "./User.js";

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      refs: "User",
      required: true,
    },
    products: [
      {
        _id: false,
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    receipt: { type: Number, required: true },
    status: {
      type: String,
      enum: ["PENDING", "SHIPPING", "SUCCESS", "CANCELLED"],
      default: "PENDING",
    },
  },
  { collection: "carts", timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
