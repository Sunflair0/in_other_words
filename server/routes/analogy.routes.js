const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const {  delTerm} = require("../models/analogy.model");



// /////I would like to add a term (with sub and definition)



// /////I would like to delete a term I created
router.delete("/delete/:analogy_id", auth, (req, res) => {
  const { term_id } = req.params;
  return delTerm(res, req.user.id, term_id);
});


// /////I would like to edit a term I created







module.exports = router;