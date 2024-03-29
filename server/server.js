import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import fs from "fs";
import path from "path";
import App from "../src/App";

const PORT = 65000;
const app = express();


app.use("^/$", (req, res, next) => {
	fs.readFile(path.resolve("./build/index.html"), (err, data) => {
		if (err) {
			console.log(err)
			return res.status(500).send("An Error Occurred")
		}
		return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))

	})
})
app.use(express.static(path.resolve(__dirname, 'buildFolder')))

app.listen(PORT, ()=> {
console.log(`App launched on ${PORT}`);
});