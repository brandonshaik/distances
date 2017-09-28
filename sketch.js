var data;
var titles = [];



function preload(){
	data = loadJSON("distances.json")
}

function setup(){
	console.log(data);
	noCanvas();

	var trans = {};

	var dropdown1 = createSelect();
	var dropdown2 = createSelect();

	var button = createButton("submit");


	for (var i = 0; i < Object.keys(data).length; i++){
		texts = data[i].texts;
		titles.push(texts);

		dropdown1.option(texts);
		dropdown2.option(texts);

		trans[texts] = data[i];


	}
	
	console.log(data);
	console.log(trans);

	button.mousePressed(simScores);

	function simScores(){
		var text1 = dropdown1.value();
		var text2 = dropdown2.value();

		var title1 = trans[text1];
		var title2 = trans[text2];

		var titles = Object.keys(title1);

		var i = titles.indexOf("texts");
		titles.splice(i, 1);

		var j = titles.indexOf("");
		titles.splice(j, 1);

		console.log(titles);

		for (var i = 0; i < titles.length; i++){
			var title = titles[i];

			var score1 = title1[title];
			var score2 = title2[title];
			console.log(score1);

			}
			console.log(score1);
			console.log(score2);
	}
			

}

