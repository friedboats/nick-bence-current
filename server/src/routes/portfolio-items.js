import express from "express";
import {
  getPortfolioItems,
  createPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
} from "../controllers/portfolio-items.js";

const router = express.Router();
router.get("/", getPortfolioItems);
router.post("/", createPortfolioItem);
router.patch("/:id", updatePortfolioItem);
router.delete("/:id", deletePortfolioItem);

export default router;
