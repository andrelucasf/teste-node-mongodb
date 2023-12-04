// src/validations/productValidation.ts
import { celebrate, Joi, Segments } from "celebrate";

export const createProductValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().required(),
  }),
});

export const updateProductValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    price: Joi.number().min(0),
    description: Joi.string(),
  }),
});

export const productIdValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
});
