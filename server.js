const express = require("express");
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

var prefix = __dirname + "/static/";
var folder = "Image-0";

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/image", function(req, res){
	files = fs.readdirSync(prefix + folder);
	res.render("image.ejs", {files: files, folder: folder});
});

app.listen(3000, function(){
	console.log("server started at port 3000");
	console.log("use body parser to read form data");
});