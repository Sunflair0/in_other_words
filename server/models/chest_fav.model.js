const query = require("../config/mysql.conf");


// /////I would like to see all my treasures(favorites)
async function getTreasures(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const chest = await query("SELECT * FROM chest WHERE user_id = ?", [user_id]);
    json = { ...json, success: true, data: chest };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to add a treasure to my chest
async function addTreasure(res, user_id, treasure) {
  let json = { success: false, error: null, data: null };
  try {
    const res = await query(
      "INSERT INTO chest WHERE user_id = ? AND analogy_id = ?",
      [user_id, treasure]
    );
    treasure = { ...treasure, id: res.InsertID, user_id };
    json = { ...json, success: true, data: treasure[0] };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to discard a treasure from my chest
async function delTreasure(res, user_id, analogy_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM chest WHERE user_id = ? AND analogy_id = ?", 
[user_id, analogy_id]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to discard ALL my treasures
async function delAllTreasures(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM chest WHERE user_id = ?", [user_id]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

module.exports = { getTreasures, addTreasure, delTreasure, delAllTreasures};