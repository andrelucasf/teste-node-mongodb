import { IProduct } from "../dtos/IProduct.dto";
import { ProductModel as Product } from "../entities/Product";
import { IProductRepository } from "../repositories/IProductRepository";

class ProductUseCases implements IProductRepository {
  async createProduct(productData: IProduct): Promise<IProduct> {
    return Product.create(productData);
  }

  async listProducts(): Promise<IProduct[]> {
    return Product.find();
  }

  async getProductById(productId: string): Promise<IProduct | null> {
    return Product.findById(productId);
  }

  async updateProduct(productData: IProduct): Promise<IProduct | null> {
    return Product.findByIdAndUpdate(productData.id, productData, {
      new: true,
    });
  }

  async deleteProduct(productId: string): Promise<IProduct> {
    const response = await Product.findByIdAndDelete(productId).lean();

    if (!response || response === null) {
      throw new Error("Product not found");
    }

    return response;
  }

  async listProductsAbovePrice(minPrice: number): Promise<IProduct[]> {
    return Product.find({ price: { $gt: minPrice } });
  }

  async listProductsByDescription(keyword: string): Promise<IProduct[]> {
    return Product.find({ description: { $regex: new RegExp(keyword, "i") } });
  }
}

export default new ProductUseCases();
