var quotes = [
    'blah blah'   
    'Go go go'
]
function newQuote() {
	var randomNumbuer = Math.floor(Math.random()* (quotes.length));
	document.getElementById('quoteDisplay'),innerHTML = quotes[randomNumber];
}