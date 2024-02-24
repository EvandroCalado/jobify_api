import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import fs from "fs";
import mongoose from "mongoose";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";

// middlewares
import authenticateUser from "./middlewares/authMiddleware.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

// routes
import authRouter from "./routes/authRouter.js";
import jobRouter from "./routes/jobRouter.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// swagger
const swagger = fs.readFileSync("./swagger.yaml", "utf8");
const swaggerDocument = YAML.parse(swagger);
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => console.log(`Server running on port ${port}...`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
