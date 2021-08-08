const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const { addTerm, delTerm, editTerm} = require("../models/analogy.model");



// /////I would like to add a term (with sub and definition)
router.post("/add", auth, (req, res) => {
  const { treasure } = req.body;
  if ( user_id && term_id && sub && req.user_id) {
    return addTerm(res, req.user_id, treasure);
  }
  return res.send({
    success: false,
    error: "Incorrect parameters",
    data: null,
  });
});


// /////I would like to delete a term I created
router.delete("/delete/:analogy_id", auth, (req, res) => {
  const { term_id } = req.params;
  return delTerm(res, req.user.id, term_id);
});


// /////I would like to edit a term I created
router.patch("/patch/:term_id/:user_id/:sub_category_id/:definition/:term_id/:text_term", auth, (req, res) => {
  const { result } = req.params;
  return editTerm(result, req.user.id, term_id, sub_category_id, definition, text_term);
})






module.exports = router;