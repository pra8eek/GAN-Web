const express = require("express");
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

var prefix = __dirname + "/static/";
var dataset = fs.readdirSync(prefix + "dataset/");

app.get("/", function(req, res){
	const shuffled = dataset.sort(() => 0.5 - Math.random());
	let miniDataset = shuffled.slice(0, 10);
	res.render("home.ejs", {miniDataset: miniDataset});
});

app.get("/image", function(req, res){
	var folder = "Image-0/";
	var filesCount = fs.readdirSync(prefix + folder).length;
	res.render("image.ejs", {filesCount: filesCount, folder: folder});
});

app.listen(3000, function(){
	console.log("server started at port 3000");
	console.log("use body parser to read form data");
});