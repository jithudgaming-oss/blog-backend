import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("api is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`WELCOME HANDLER ONE.server is running at port ${PORT}`);
});
