import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();

const port = process.env.PORT || 3000;

await connectDB()

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API SERVER IS RUNNING...");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
