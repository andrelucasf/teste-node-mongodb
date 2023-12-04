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

export {
  createProductValidator,
  createProductSwagger,
  updateProductValidator,
  updateProductSwagger,
  productIdValidator,
};
