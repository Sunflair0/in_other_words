const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const { getSubs, getTerm, getAnaG} = require("../models/profile.model");



module.exports = router;