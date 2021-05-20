const express = require("express");
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));

var prefix = __dirname + "/static/";
var dataset = fs.readdirSync(prefix + "dataset/");
var output = fs.readdirSync(prefix + "output/");
var animation = fs.readdirSync(prefix + "animation");

app.get("/", function (req, res) {
	
	var arr = [];
	var miniOutput = [];
	var miniAnimation = [];
	while (arr.length < 10) {
		var r = Math.floor(Math.random() * 100) + 1;
		if (arr.indexOf(r) === -1) {
			arr.push(r);
			miniOutput.push(r.toString() + ".png");
			miniAnimation.push(r.toString() + ".gif");
}
	}	
	const shuffled = dataset.sort(() => 0.5 - Math.random());
	// const shuffledAnother = output.sort(() => 0.5 - Math.random());
	// const shuffledAnotherOne = animation.sort(() => 0.5 - Math.random());
	let miniDataset = shuffled.slice(0, 10);
	// let miniOutput = shuffledAnother.slice(0, 10);
	// let miniAnimation = shuffledAnotherOne.slice(0, 10);
	// console.log(miniOutput[9]);
	// console.log(miniAnimation[9]);
	res.render("home.ejs", {
		miniDataset: miniDataset,
		miniOutput: miniOutput,
		miniAnimation: miniAnimation
	});
});


app.get("/image", function (req, res) {
	var name = req.query.name;
	var folder = "Image128/Image-" + name.slice(0, -4) + "/";
	var filesCount = fs.readdirSync(prefix + folder).length;
	res.render("image.ejs", { filesCount: filesCount, folder: folder });
});

app.get("/images", function (req, res) {
	// const shuffledAnother = output.sort(() => 0.5 - Math.random());
	// let miniOutput = shuffledAnother.slice(0,10);
	res.render("images.ejs", { output: output })
});

app.listen(3000, function () {
	console.log("server started at port 3000");
	console.log("use body parser to read form data");
});