const Hotel = require("../model/hotel.model");

const getAllHotelHandler = async (req, res) => {
  try {
    let getHotelData;
    let hotelCategory = req.query.category; //http:localhost/3000/api/hotels?category=corbett+park
    if (hotelCategory) {
      getHotelData = await Hotel.find({ category: hotelCategory });
    } else {
      getHotelData = await Hotel.find({});
    }
    getHotelData
      ? res.json(getHotelData)
      : res.status(404).json({ message: "No data found" });
  } catch (err) {
    console.log(res.err);
  }
};

module.exports = getAllHotelHandler;
