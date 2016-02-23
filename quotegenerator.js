var lines = [];

function load() {
	$(document).ready(function() {
		//fetch the text file
		$.get('./resources/chuck_norris_quotes.txt', function(data) {
			//split the data up according to line breaks into the lines array
			lines = data.split('\n');
			console.log(lines);
		});

	$('.popup').click(function(event) {
    var width  = 575,
        height = 400,
        left   = ($(window).width()  - width)  / 2,
        top    = ($(window).height() - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;
    
    window.open(url, 'twitter', opts);
 
    return false;
  });
	});


}

function press() {
	//randomly generate the quote
	var currentQuote = lines[Math.floor(lines.length * Math.random())];
	//send the quote to the text element
	console.log(currentQuote);
	$('#quote').text(currentQuote);
	$('title').text(currentQuote);

}