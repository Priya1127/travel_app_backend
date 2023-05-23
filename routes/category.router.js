const express = require("express");
const getCategoryHandler = require("../controllers/categoryController");

const router = express.Router();

router.route("/").get(getCategoryHandler);

module.exports = router;
