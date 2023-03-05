require("dotenv").config()
// var http = require("http");
const express = require("express");
const app = express();
// server = http.Server(app);
const mysql = require("mysql");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log("Booyah! 5000 up and running")
})

const util = require("util");
const pool = mysql.createPool({
	connectionLimit: 10,
	// autocommit: true,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT,
});


app.get("/", function (req, res) {
	console.log(req.url);
	res.send("<h4>Welcome to ...IOW</h4>") 
	pool.getConnection(function (err, conn) {
		if (err) {
			if (err.code === "PROTOCOL_CONNECTION_LOST") {
				console.error("Database connection was closed.");
			}
			if (err.code === "ER_CON_COUNT_ERROR") {
				console.error("Database has too many connections.");
			}
			if (err.code === "ECONNREFUSED") {
				console.error("Database connection was refused.");
			}
			else {
				conn.query('select * from analogy', function (err2, records, fields) {
					if (!err2) {
						res.send(records)
					}
					conn.release();
				})
			}}}
		)
});

const query = util.promisify(pool.query).bind(pool);

module.exports = query;