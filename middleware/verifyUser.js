const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) res.status(404).json({ message: "Invalid Token" });
      req.user = user;
      next(); //if there is no error then only if goes on to execute next function
    });
  }
};

module.exports = verifyUser;
