import express from "express"
import cors from "cors"
import "dotenv/config"
import multer from "multer";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import employeeRouter from "./routes/employeeRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import attendanceRouter from "./routes/attendanceRoutes.js";
import leaveRouter from "./routes/leaveRoutes.js";
import payslipRouter from "./routes/payslipsRoutes.js";

const app = express()
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors())
app.use(express.json())
app.use(multer().none())

// Routes
app.get("/", (req, res)=> res.send("Server is running"));
app.use("/api/auth", authRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/profile", profileRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/payslips", payslipRouter);

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("connection successful");

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

main();