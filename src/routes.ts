// src/routes.ts
import express from "express";
import ProductController from "./modules/product/controller/ProductController";
import {
  createProductValidator,
  productIdValidator,
  updateProductValidator,
} from "./modules/product/validators/ProductValidator";

const router = express.Router();

router.post(
  "/products",
  createProductValidator,
  ProductController.createProduct
);

router.get("/products", ProductController.listProducts);

router.get(
  "/products/:id",
  productIdValidator,
  ProductController.getProductById
);

router.put(
  "/products/:id",
  [productIdValidator, updateProductValidator],
  ProductController.updateProduct
);

router.delete(
  "/products/:id",
  productIdValidator,
  ProductController.deleteProduct
);

export default router;
