const express = require("express");
const router = express.Router();
import { useOktaAuth } from '@okta/okta-react';
const { getTreasures, addTreasure, delTreasure, delAllTreasures} = require("../models/chest_fav.model");


// /////I would like to see all my treasures(favorites)
router.get("/user", auth, (req, res) => {
  return getTreasures(res, req.user.id);
});

// /////I would like to add a treasure to my chest
router.post("/add", auth, (req, res) => {
  const { treasure } = req.body;
  if ( treasure && treasure.analogy_id) {
    return addTreasure(res, req.user.id, treasure);
  }
  return res.send({
    success: false,
    error: "Incorrect parameters",
    data: null,
  });
});

// /////I would like to discard a treasure from my chest
router.delete("/delete/:analogy_id", auth, (req, res) => {
  const { analogy_id } = req.params;
  return delTreasure(res, req.user.id, analogy_id);
});


// /////I would like to discard ALL my treasures
router.delete("/delete/all/:user_id", auth, (req, res) => {
  const { result } = req.params;
  return delAllTreasures(result, req.user.id);
});

module.exports = router;