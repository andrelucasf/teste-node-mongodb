import { Request, Response } from "express";
import ProductUseCases from "../useCases/ProductUseCases";

class ProductController {
  async createProduct(req: Request, res: Response) {
    try {
      const newProduct = await ProductUseCases.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "Error creating product" });
    }
  }

  async listProducts(req: Request, res: Response) {
    try {
      const products = await ProductUseCases.listProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Error listing products" });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const product = await ProductUseCases.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Error getting product by ID" });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const updatedProduct = await ProductUseCases.updateProduct(
        req.params.id,
        req.body
      );
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: "Error updating product" });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      await ProductUseCases.deleteProduct(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Error deleting product" });
    }
  }
}

export default new ProductController();
