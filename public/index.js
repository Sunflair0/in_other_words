require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportConf = require("./server/config/passport.conf");

app.use(express.json());
passportConf(passport);
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(__dirname + "/build"));

app.get("/", (req, res) =>{
console.log(req.url);
res.send("<h4><hello></h4>");
});

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, function(){
console.log("Listening on port 3306");
})