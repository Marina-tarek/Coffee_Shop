import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

export default models.Product || model("Product", productSchema);

