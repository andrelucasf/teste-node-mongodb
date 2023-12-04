import { Document } from "mongoose";

interface IProduct extends Document {
  id?: string;
  name: string;
  price: number;
  description: number;
}

export type { IProduct };
