import { Request, Response } from "express";
import ProductUseCases from "../useCases/ProductUseCases";

class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const newProduct = await ProductUseCases.createProduct(req.body);
      return res
        .status(201)
        .json({ message: "Product created successfully", product: newProduct });
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Error creating product", error: error.message });
    }
  }

  async listProducts(req: Request, res: Response) {
    try {
      const products = await ProductUseCases.listProducts();
      return res.json(products);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Error listing products", error: error.message });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const product = await ProductUseCases.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.json(product);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Error getting product by ID", error: error.message });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const updatedProduct = await ProductUseCases.updateProduct(req.body);

      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Error updating product", error: error.message });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const product = await ProductUseCases.deleteProduct(String(id));
      return res
        .status(200)
        .json({ message: "Product deleted successfully", product: product });
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Error deleting product", error: error.message });
    }
  }
}

export default new ProductController();
