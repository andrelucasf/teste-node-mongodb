// src/validations/productValidation.ts
import { celebrate, Joi, Segments } from "celebrate";
import j2s from "joi-to-swagger";

const productSchema = Joi.object().keys({
  id: Joi.string().optional(),
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  description: Joi.string().required(),
});

const createProductValidator = celebrate({
  [Segments.BODY]: productSchema,
});

const { swagger: createProductSwagger } = j2s(productSchema);

const updateProductValidator = celebrate({
  [Segments.BODY]: productSchema,
});

const { swagger: updateProductSwagger } = j2s(productSchema);

const productIdValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string(),
  }),
});

const minPriceValidator = Joi.object().keys({
  minPrice: Joi.number().min(0).required(),
});

const listProductsAbovePriceValidator = celebrate({
  [Segments.QUERY]: minPriceValidator,
});

const { swagger: listProductsAbovePriceSwagger } = j2s(minPriceValidator);

const keywordValidator = Joi.object().keys({
  keyword: Joi.string().required(),
});

const listProductsByDescriptionValidator = celebrate({
  [Segments.QUERY]: keywordValidator,
});

const { swagger: listProductsByDescriptionSwagger } = j2s(keywordValidator);

export {
  createProductValidator,
  createProductSwagger,
  updateProductValidator,
  updateProductSwagger,
  productIdValidator,
  listProductsAbovePriceValidator,
  listProductsAbovePriceSwagger,
  listProductsByDescriptionValidator,
  listProductsByDescriptionSwagger,
};
