// src/routes.ts
import express from "express";
import ProductController from "./modules/product/controller/ProductController";

const router = express.Router();

router.post("/products", ProductController.createProduct);
router.get("/products", ProductController.listProducts);
router.get("/products/:id", ProductController.getProductById);
router.put("/products/:id", ProductController.updateProduct);
router.delete("/products/:id", ProductController.deleteProduct);

export default router;