const Hotel = require("../model/hotel.model");

const singleHotelHandler = async (req, res) => {
  try {
    const id = req.params.id; // const {id} = req.params;
    if (id) {
      const hotel = await Hotel.findById(id);
      res.json(hotel);
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "No Hotel found!!" });
  }
};

module.exports = singleHotelHandler;
