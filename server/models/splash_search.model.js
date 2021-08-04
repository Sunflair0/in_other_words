const bcrypt = require("bcrypt");
const query = require("../config/mysql.conf");
const { v4: uuidv4 } = require("uuid");


// /////I would like to see the sub_categories
async function getSubs(res, category_id) {
  let json = { success: false, error: null, data: null };
  try {
    const anaG = await query("SELECT * FROM sub_category WHERE category_id = ?", [category_id]);
    json = { ...json, success: true, data: anaG };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

// /////I would like to see an analogy
async function getAnaG(res, analogy_id) {
  let json = { success: false, error: null, data: null };
  try {
    const anaG = await query("SELECT FROM sub_category WHERE analogy_id = ?", [analogy_id]);
    json = { ...json, success: true, data: anaG };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}



module.exports = { getSubs, getAnaG};