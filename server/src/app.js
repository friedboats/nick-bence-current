import express from "express";
import cors from "cors";
import portfolioItemRoutes from "./routes/portfolio-items.js";
import "./db/db.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/portfolio-items", portfolioItemRoutes);
app.listen(8000);
