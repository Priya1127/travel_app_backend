const User = require("../model/user.model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const signupHandler = async (req, res) => {
  try {
    const userObject = {
      username: req.body.username,
      number: req.body.number,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET_KEY
      ).toString(),
      email: req.body.email,
    };
    const newUser = new User(userObject);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Error during user registeration" });
  }
};

module.exports = signupHandler;
