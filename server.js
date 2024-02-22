import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import morgan from "morgan";

// middlewares
import authenticateUser from "./middlewares/authMiddleware.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

// routes
import authRouter from "./routes/authRouter.js";
import jobRouter from "./routes/jobRouter.js";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// index
app.post("/", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "Welcome Jobify" });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
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
