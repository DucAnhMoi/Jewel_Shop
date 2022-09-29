import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    rating: { type: Object, default: { rate: "", count: 0 } },
    category: { type: String, required: true },
    storage: [
      {
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    discount: { type: Number, required: true, min: 0, max: 100, default: 0 },
  },
  {
    timestamps: true,
    collection: "products",
  }
);

ProductSchema.index({ name: "text" });

export default mongoose.model("Product", ProductSchema);
