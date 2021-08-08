const query = require("../config/mysql.conf");

// /////I would like to see all categories
async function getCats(res, category) {
  let json = { success: false, error: null, data: null };
  try {
    const cats = await query("SELECT * FROM category", [category]);
    json = { ...json, success: true, data: cats };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to see sub-categories
async function getSubs(res, category_id) {
  let json = { success: false, error: null, data: null };
  try {
    const subC = await query("SELECT * FROM sub_category", [category_id]);
    json = { ...json, success: true, data: subC };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to see terms and definitions
async function getTerm(res, text_term, definition) {
  let json = { success: false, error: null, data: null };
  try {
    const term = await query("SELECT text_term, definition FROM term", [text_term, definition]);
    json = { ...json, success: true, data: term };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to see analogies
async function getAnaG(res, text_ana) {
  let json = { success: false, error: null, data: null };
  try {
    const anaG = await query("SELECT text_ana from Analogy", [text_ana]);
    json = { ...json, success: true, data: anaG };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

module.exports = {getCats, getSubs, getTerm, getAnaG};