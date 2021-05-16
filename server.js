const express = require("express");
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

var prefix = __dirname + "/static/";
var dataset = fs.readdirSync(prefix + "dataset/");
var output = fs.readdirSync(prefix + "output/");

app.get("/", function(req, res){
	const shuffled = dataset.sort(() => 0.5 - Math.random());
	const shuffledAnother = output.sort(() => 0.5 - Math.random());
	let miniOutput = shuffledAnother.slice(0,10);
	let miniDataset = shuffled.slice(0, 10);
	res.render("home.ejs", {miniDataset: miniDataset,
	miniOutput: miniOutput});
});


app.get("/image", function(req, res){
	var name = req.query.name;
	var folder = "Image128/Image-" + name.slice(0, -4) + "/";
	var filesCount = fs.readdirSync(prefix + folder).length;
	res.render("image.ejs", {filesCount: filesCount, folder: folder});
});

app.listen(3000, function(){
	console.log("server started at port 3000");
	console.log("use body parser to read form data");
});