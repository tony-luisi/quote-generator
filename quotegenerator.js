var lines = [];

function load() {
	$(document).ready(function() {
		//fetch the text file
		$.get('./resources/chuck_norris_quotes.txt', function(data) {
			//split the data up according to line breaks into the lines array
			lines = data.split('\n');
			console.log(lines);
			$('#quote').text(lines[1	]);

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

	!function(d,s,id) {
		var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;
			js.src=p+'://platform.twitter.com/widgets.js';
			fjs.parentNode.insertBefore(js,fjs);
		}}(document, 'script', 'twitter-wjs');

	});

	window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));


}

function press() {
	//randomly generate the quote
	var currentQuote = lines[Math.floor(lines.length * Math.random())];
	//send the quote to the text element
	console.log(currentQuote);
	$('#quote').text(currentQuote);

}

