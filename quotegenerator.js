var lines = [];
var currentQuote = "MacGyver can build an airplane out of gum and paper clips. Chuck Norris can kill him and take it.";

$(document).ready(function() {
		//fetch the text file
		$.get('./resources/chuck_norris_quotes.txt', function(data) {
			//split the data up according to line breaks into the lines array
			lines = data.split('\n');
			currentQuote = lines[1];
			//console.log(lines);
			$('#quote').text(currentQuote);

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

		window.twttr = (function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
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
		/*

		!function(d,s,id) {
			var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
			if(!d.getElementById(id)){
				js=d.createElement(s);
				js.id=id;
				js.src=p+'://platform.twitter.com/widgets.js';
				fjs.parentNode.insertBefore(js,fjs);
			}
		}(document, 'script', 'twitter-wjs');
		*/
		twttr.ready(function() {
			console.log(currentQuote);
			twttr.widgets.createShareButton('http://tony-luisi.github.io/quote-generator/',document.getElementById('twitterbutton'),{ text: currentQuote });
			
		});


});

function press() {
	//randomly generate the quote
	currentQuote = lines[Math.floor(lines.length * Math.random())];
	//send the quote to the text element
	//console.log(currentQuote);
	$('#quote').text(currentQuote);
	twttr.ready(function() {
		twttr.widgets.createShareButton('http://tony-luisi.github.io/quote-generator/',document.getElementById('twitterbutton'),{ text: currentQuote });

	});

}

