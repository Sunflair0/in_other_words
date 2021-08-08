const query = require("../config/mysql.conf");


// /////I would like to add a term (with sub and definition)
async function addTerm(res, user_id, term_id, sub_category_id, definition, text_term) {
	let json = { success: false, error: null, data: null };
	try {
		await query("INSERT INTO term WHERE (user_id, term_id, sub_category_id, definition, text_term) VALUES (?,?,?,?,?)", [
			user_id,
			term_id,
			sub_category_id,
			definition,
			text_term
		]);
		json = { ...json, success: true };
	} catch (err) {
		json.error = "Something went wrong...";
	} finally {
		return res.send(json);
	}
}

// /////I would like to delete a term I created
async function delTerm(res, user_id, term_id) {
	let json = { success: false, error: null, data: null };
	try {
		await query("DELETE FROM term WHERE user_id = ? AND term_id = ?", [
			user_id,
			term_id,
		]);
		json = { ...json, success: true };
	} catch (err) {
		json.error = "Something went wrong...";
	} finally {
		return res.send(json);
	}
}

// /////I would like to edit a term I created
async function editTerm(res, user_id, term_id, sub_category_id, definition, text_term) {
	let json = { success: false, error: null, data: null };
	try {
		await query("UPDATE FROM term WHERE (user_id, term_id, sub_category_id, definition, text_term) VALUES (?,?,?,?,?)", [
			user_id,
			term_id,
			sub_category_id,
			definition,
			text_term
		]);
		json = { ...json, success: true };
	} catch (err) {
		json.error = "Something went wrong...";
	} finally {
		return res.send(json);
	}
}

module.exports = { addTerm, delTerm, editTerm };

