var lines = [];

function load() {
	$(document).ready(function() {
		//fetch the text file
		$.get('./resources/chuck_norris_quotes.txt', function(data) {
			//split the data up according to line breaks into the lines array
			lines = data.split('\n');
		});
	});
}

function press() {
	//randomly generate the quote
	var currentQuote = lines[Math.floor(lines.length * Math.random)];
	//send the quote to the text element
	$('#quote').text(currentQuote);

}