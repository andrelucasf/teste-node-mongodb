import express from "express";
import ProductController from "./modules/product/controller/ProductController";
import {
  createProductValidator,
  listProductsAbovePriceValidator,
  listProductsByDescriptionValidator,
  productIdValidator,
  updateProductValidator,
} from "./modules/product/validators/ProductValidator";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger";

const router = express.Router();

router.post(
  "/products",
  createProductValidator,
  ProductController.createProduct
);

router.get(
  "/products/price",
  listProductsAbovePriceValidator,
  ProductController.listProductsAbovePrice
);

router.get("/products", ProductController.listProducts);

router.get(
  "/products/description",
  listProductsByDescriptionValidator,
  ProductController.listProductsByDescription
);

router.get(
  "/products/:id",
  productIdValidator,
  ProductController.getProductById
);

router.put(
  "/products",
  [productIdValidator, updateProductValidator],
  ProductController.updateProduct
);

router.delete("/products", productIdValidator, ProductController.deleteProduct);

router.use("/docs", swaggerUi.serve);

router.get("/docs", swaggerUi.setup(swaggerFile));

export default router;
