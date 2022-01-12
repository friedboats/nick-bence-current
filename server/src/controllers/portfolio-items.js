import PortfolioItemModel from "../models/portfolio-item.js";

export const createPortfolioItem = async (req, res) => {
  try {
    const portfolioItem = new PortfolioItemModel(req.body);
    await portfolioItem.save();
    res.status(201).json(portfolioItem);
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const getPortfolioItems = async (req, res) => {
  try {
    const portfolioItems = await PortfolioItemModel.find();
    res.status(200).json(portfolioItems);
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export const updatePortfolioItem = async (req, res) => {
  const allowedOptions = ["title", "description", "thumbnail_image", "images"];
  const selectedOption = Object.keys(req.body);
  const doesExist = selectedOption.every((option) =>
    allowedOptions.includes(option)
  );

  if (!doesExist) {
    return res.status(404).json({ success: false, error });
  }

  try {
    const portfolioItem = await PortfolioItemModel.findById({
      _id: req.params.id,
    });
    selectedOption.forEach(
      (option) => (portfolioItem[option] = req.body[option])
    );
    await portfolioItem.save();
    res.status(200).json(portfolioItem);
  } catch (error) {
    res.status(404).json({ success: false, error });
  }
};

export const deletePortfolioItem = async (req, res) => {
  try {
    const portfolioItem = await PortfolioItemModel.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).json("Portfolio item was deleted");
  } catch (error) {
    res.status(404).json({ success: false, error });
  }
};
