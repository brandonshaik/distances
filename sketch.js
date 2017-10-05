var data;
var terms = [];


var $closestDiv;


function preload(){
	data = loadJSON("smallDist.json")
}

function setup(){
	noCanvas();

	$closestDiv = $('#closest');

	var allTerms = {};

	var dropdown = createSelect();

	var button = createButton("submit");

	for (var i = 0; i < Object.keys(data).length; i++){
		term = data[i].term;
		terms.push(term);

		dropdown.option(term);

		allTerms[term] = data[i];


	}
	
	// console.log(data);
	console.log(allTerms);

	button.mousePressed(simScores);



	// function findNearestNeighbor(){

	// 	var text = dropdown.value();
		
	// 	var similarityScores = [];


	// 	for (var i =0; i < Object.keys(data).length; i++){
	// 		var other = data[i].terms;

	// 		console.log(terms);

	// 		if(other != text) {
	// 			var similarity = simScores (text, other);

	// 			similarityScores[i] = similarity;

	// 		}
	// 	}

	// 	console.log(similarity);
	// }



	function simScores(text){

		var text = dropdown.value();


		var term1 = allTerms[text];

		console.log(term1);

		var sortable = [];

		for (var term in term1) {
    	sortable.push([term, term1[term]]);
		}

		$closestDiv.empty();

		var sortable = sortable.sort(function(a, b) {
		    return a[1] - b[1];
		});

		$.each(sortable, function( key  , value ) {
  			
  			var $p = $("<p>")
  			$p.text(value[0] + ': ' + value[1]);
  			$closestDiv.append($p);
  			// createP(value, closestDiv);


		});
		

		

	}
};


		// var i = terms.indexOf("texts");
		// terms.splice(i, 1);

		// var j = terms.indexOf("");
		// terms.splice(j, 1);

		// console.log(terms);

		// for (var i = 0; i < terms.length; i++){
		// 	var title = terms[i];

		// 	var score1 = term1[title];
			
		// 	// console.log(score1);

		// 	}
			
			// var sorted_array = sortData();
			// console.log(sorted_array);




// function sortData(){ 
// 	console.log(data);
// 	var data_array = Object.keys(data).map(function(key) {
// 	  return [Number(key), data[key]];
// 	});

// 	data_array.sort(function(a,b){
// 		if(a.terms > b.terms) return -1;
// 		if(a.terms < b.terms) return 1;
// 		if(a.terms == b.terms) return 0;
// 	});

// 	console.log(data_array);

// 	return data_array;



  // [].slice.call(data).sort(function(a,b){ 
  //   console.log(a.title, b.title);
  // }); 





