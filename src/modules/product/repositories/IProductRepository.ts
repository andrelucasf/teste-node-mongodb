import { IProduct } from "../dtos/IProduct.dto";

interface IProductRepository {
  createProduct(data: IProduct): Promise<IProduct>;
  listProducts(): Promise<IProduct[]>;
  getProductById(productId: string): Promise<IProduct | null>;
  updateProduct(data: IProduct): Promise<IProduct | null>;
  deleteProduct(productId: string): Promise<IProduct>;
}

export type { IProductRepository };
