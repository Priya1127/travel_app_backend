const Wishlist = require("../model/wishlist.model");

const createWishlistHandler = async (req, res) => {
  const newWishlist = new Wishlist(req.body);
  try {
    const savedWishlist = await newWishlist.save();
    res.status(201).json(savedWishlist);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding to wishlist" });
  }
};

const deleteWishlistHandler = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.json({ message: "hotel successfully removed from wishlist" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error removing from wishlist" });
  }
};

const getWishlistHandler = async (req, res) => {
  try {
    const getWishlist = await Wishlist.find({});
    getWishlist
      ? res.json(getWishlist)
      : res.json({ message: "Nothing found!!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  createWishlistHandler,
  deleteWishlistHandler,
  getWishlistHandler,
};
