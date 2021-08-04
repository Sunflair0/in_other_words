const bcrypt = require("bcrypt");
const query = require("../config/mysql.conf");
const { v4: uuidv4 } = require("uuid");


// /////I would like to see a sub-category
async function getSubs(res, category_id) {
  let json = { success: false, error: null, data: null };
  try {
    const anaG = await query("SELECT FROM sub_category WHERE category_id = ?", [category_id]);
    json = { ...json, success: true, data: anaG };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to see a term
async function getTerm(res, term_id, definition) {
  let json = { success: false, error: null, data: null };
  try {
    const term = await query("SELECT FROM term_id WHERE term_id = ? AND definition = ?", [term_id, definition]);
    json = { ...json, success: true, data: term };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to see an analogy
async function getAnaG(res, analogy_id, text_ana) {
  let json = { success: false, error: null, data: null };
  try {
    const anaG = await query("SELECT FROM analogy_id WHERE text_ana = ?", [analogy_id, text_ana]);
    json = { ...json, success: true, data: anaG };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

module.exports = { getSubs, getTerm, getAnaG};