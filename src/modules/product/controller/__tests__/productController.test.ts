import request from "supertest";
import app from "../../../../app";
import { IProduct } from "../../dtos/IProduct.dto";
import connectDB from "../../../../database/mongodb";

describe("ProductController", () => {
  beforeAll(async () => {
    await connectDB();
  });

  it("should create a new product", async () => {
    const product = {
      name: "Test Product",
      price: 10,
      description: "Test description",
    };

    const response = await request(app)
      .post("/api/products")
      .send(product)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    console.log(response.body.product);

    expect(response.status).toBe(201);
    expect(response.body.product).toHaveProperty("name", "Test Product");
  });

  it("should list all products", async () => {
    const response = await request(app).get("/api/products");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  }, 1000);
});
