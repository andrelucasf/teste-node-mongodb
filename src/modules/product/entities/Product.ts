import mongoose, { Schema } from "mongoose";
import { IProduct } from "../dtos/IProduct.dto";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

export const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);
