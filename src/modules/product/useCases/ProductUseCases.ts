import { IProduct } from "../dtos/IProduct.dto";
import { ProductModel as Product } from "../entities/Product";

class ProductUseCases {
  async createProduct(productData: IProduct): Promise<IProduct> {
    return Product.create(productData);
  }

  async listProducts(): Promise<IProduct[]> {
    return Product.find();
  }

  async getProductById(productId: string): Promise<IProduct | null> {
    return Product.findById(productId);
  }

  async updateProduct(
    productId: string,
    productData: IProduct
  ): Promise<IProduct | null> {
    return Product.findByIdAndUpdate(productId, productData, { new: true });
  }

  async deleteProduct(productId: string): Promise<void> {
    await Product.findByIdAndDelete(productId);
  }
}

export default new ProductUseCases();
