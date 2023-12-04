import {
  createProductSwagger,
  updateProductSwagger,
  updateProductValidator,
} from "./modules/product/validators/ProductValidator";

const swaggerFile = {
  openapi: "3.0.0",
  info: {
    title: "API de Produtos",
    description: "API de Produtos",
    version: "1.0.0",
    contact: {
      email: "andre.lucas.lemos@hotmail.com",
    },
  },
  paths: {
    "/products": {
      post: {
        tags: ["products"],
        summary: "Cria um produto",
        description: "Cria um produto",
        requestBody: {
          content: {
            "application/json": {
              schema: createProductSwagger,
            },
          },
        },
        responses: {
          "200": {
            description: "Sucess",
          },
          "400": {
            description: "Bad Request",
          },
          "404": {
            description: "Not Found",
          },
          "500": {
            description: "Internal Server Error",
          },
        },
      },
      get: {
        tags: ["products"],
        summary: "Listar produtos",
        description: "Lista os produtos cadastrados",
        responses: {
          "200": {
            description: "Sucess",
          },
          "400": {
            description: "Bad Request",
          },
          "404": {
            description: "Not Found",
          },
          "500": {
            description: "Internal Server Error",
          },
        },
      },
      delete: {
        tags: ["products"],
        summary: "Listar produtos",
        description: "Lista os produtos cadastrados",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID do produto",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "Sucess",
          },
          "400": {
            description: "Bad Request",
          },
          "404": {
            description: "Not Found",
          },
          "500": {
            description: "Internal Server Error",
          },
        },
      },
      put: {
        tags: ["products"],
        summary: "Atualizar produtos",
        description: "Atualizar produtos cadastrados",
        requestBody: {
          content: {
            "application/json": {
              schema: updateProductSwagger,
            },
          },
        },
        responses: {
          "200": {
            description: "Sucess",
          },
          "400": {
            description: "Bad Request",
          },
          "404": {
            description: "Not Found",
          },
          "500": {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/products/:id": {
      get: {
        tags: ["products"],
        summary: "Buscar produtos",
        description: "Busca por id os produtos cadastrados",
        responses: {
          "200": {
            description: "Sucess",
          },
          "400": {
            description: "Bad Request",
          },
          "404": {
            description: "Not Found",
          },
          "500": {
            description: "Internal Server Error",
          },
        },
      },
    },
  },
};

export default swaggerFile;
