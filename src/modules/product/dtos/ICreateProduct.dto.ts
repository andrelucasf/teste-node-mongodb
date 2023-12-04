import { Document } from "mongoose";

interface ICreateProduct extends Document {
  name: string;
  price: number;
  description: number;
}

export type { ICreateProduct };
