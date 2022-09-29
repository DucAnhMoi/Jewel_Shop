import mongoose from "mongoose";
const Schema = mongoose.Schema;
import "./Product.js";

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 6,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    age: {
      type: Number,
      default: 1,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      default: "male",
    },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    avatar: {
      type: String,
      default:
        "https://i.pinimg.com/236x/58/06/2d/58062d363ac8e5e61e9fb97e5fbefefa.jpg?nii=t",
    },
    cart: [
      {
        _id: false,
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    address: {
      city: { type: String, default: "Tỉnh/ThànhPhố" },
      district: { type: String, default: "Quận/Huyện" },
      ward: { type: String, default: "Phường/Xã" },
      specific: { type: String, default: "Địa chỉ cụ thể" },
    },
  },
  { collection: "users", timestamps: true }
);

export default mongoose.model("User", userSchema);
