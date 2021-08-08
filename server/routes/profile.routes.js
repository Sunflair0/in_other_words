const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const { getCites} = require("../models/profile.model");


router.get("/user", auth, (req, res) => {
  return getCites(res, req.params.user.id);
});


module.exports = router;