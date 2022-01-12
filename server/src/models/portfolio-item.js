import mongoose from "mongoose";

const portfolioItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail_image: { type: String, required: true },
    images: { type: [String], default: undefined, required: true },
  },
  {
    timestamps: true,
  }
);

const PortfolioItemModel = mongoose.model("portfolioItem", portfolioItemSchema);

export default PortfolioItemModel;
