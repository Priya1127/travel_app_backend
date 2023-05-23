const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/dbconfig");

dotenv.config();
const addHotelDataToDBRouter = require("./routes/dataimport.router");
const addCategoryDataToDBRouter = require("./routes/categoryimport.router");
const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singlehotel.router");
const authUser = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const app = express();
const PORT = 3500;
app.use(cors()); // CORS
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello This is backend setup");
});

app.use("/api/v1/hotelsData", addHotelDataToDBRouter);
app.use("/api/v1/categoriesData", addCategoryDataToDBRouter);
app.use("/api/v1/hotels", hotelRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/hotels", singleHotelRouter);
app.use("/api/v1/auth", authUser);
app.use("/api/v1/wishlists", wishlistRouter);

mongoose.set("strictQuery", false);
mongoose.connection.once("open", () => {
  console.log("connected to the db");

  app.listen(process.env.PORT || PORT, () => {
    console.log("Server is up and running");
  });
});
