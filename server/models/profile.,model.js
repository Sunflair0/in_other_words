const bcrypt = require("bcrypt");
const query = require("../config/mysql.conf");
const { v4: uuidv4 } = require("uuid");


// /////I would like to see all my treasures(favorites)
async function getCites(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const anaG = await query("SELECT * FROM  analogy WHERE user_id = ?", [user_id]);
    json = { ...json, success: true, data: anaG };
  } catch (err) {
    json.error = "Something isn't right";
  } finally {
    return res.send(json);
  }
}

module.exports = { getCites};