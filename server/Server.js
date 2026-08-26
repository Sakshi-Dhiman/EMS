import express from "express"
import cors from "cors"
import "dotenv/config"
import multer from "multer";
import mongoose from "mongoose";

const app = express()
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors())
app.use(express.json())
app.use(multer().none())

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("connection successful");

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

//Routes
app.get("/", (req, res)=> res.send("Server is running"))
