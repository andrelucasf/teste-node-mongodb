import { IProduct } from "../dtos/IProduct.dto";

interface IProductRepository {
  createProduct(data: IProduct): Promise<void>;
}

export type { IProductRepository };
