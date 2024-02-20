import * as dotenv from "dotenv";
import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import morgan from "morgan";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
import jobRouter from "./routes/jobRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// index
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jobify API!" });
});

app.use("/api/v1/jobs", jobRouter);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => console.log(`Server running on port ${port}...`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
