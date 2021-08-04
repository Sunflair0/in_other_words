const bcrypt = require("bcrypt");
const query = require("../config/mysql.conf");
const { v4: uuidv4 } = require("uuid");

async function getByUsername(res, username) {
  let json = { success: false, error: null, data: null };
  try {
    const users = await query(
      "SELECT id, username, uuid FROM users WHERE username = ?",
      [username]
    );
    if (users.length === 0) {
      json.error = "No user found";
    } else {
      json = { ...json, success: true, data: users[0] };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}


module.exports = { getByUsername};