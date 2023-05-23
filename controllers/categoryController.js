const Category = require("../model/category.model");

const getCategoryHandler = async (req, res) => {
  try {
    const getCategoryData = await Category.find({});
    getCategoryData
      ? res.json(getCategoryData)
      : res.status(404).json({ message: "No categories found" });
  } catch (err) {
    console.log(res.err);
    res.json({ message: "No categories found" });
  }
};

module.exports = getCategoryHandler;
