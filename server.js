import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import jobRouter from "./routes/jobRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// index
app.get("/", (req, res) => {
  res.json({ message: "Wellcome to jobify API!" });
});

app.use("/api/v1/jobs", jobRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something went wrong" });
});

const port = process.env.PORT || 5100;

app.listen(port, () => console.log(`Server runnig on port ${port}...`));
