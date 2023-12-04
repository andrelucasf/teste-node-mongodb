import express from "express";
import router from "./routes";
import dotenv from "dotenv";
import { errors } from "celebrate";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", router);
app.use(errors());

export default app;
