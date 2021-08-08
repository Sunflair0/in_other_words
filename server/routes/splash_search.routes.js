const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {getCats, getSubs, getTerm, getAnaG} = require("../models/splash_search.model");


// /////I would like to see all categories
router.get("/category", auth, (req, res) => {
  return getCats(res, req.params.category);
});


// /////I would like to see sub-categories
router.get("/category_id", auth, (req, res) => {
  return getSubs(res, req.params.category_id);
});


// /////I would like to see terms and definitions
router.get("/definition/text_term", auth, (req, res) => {
  return getTerm(res, req.params.text_term, req.params.definition);
});



// /////I would like to see analogies
router.get("/text_ana", auth, (req, res) => {
  return getAnaG(res, req.params.text_ana);
});


module.exports = router;