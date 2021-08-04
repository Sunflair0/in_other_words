const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {getAnaG} = require("../models/splash_search.model");



// /////I would like to see an analogy


// router.get("/:analogy_id/:text_ana", auth, (req, res) => {
//   return getAnaG(res, analogy_id, text_ana);
// });


module.exports = router;