import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

const app = express();
dotenv.config();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

const port = process.env.PORT || 5100;

app.listen(port, () => console.log(`Server runnig on port ${port}...`));
