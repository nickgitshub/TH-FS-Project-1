/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array of objects to store quotes
***/

const quotes = [
	{
		quote: "I'm kind of a big deal. People know me.", 
		source: "Ron Burgundy", 
		title: "THE Anchorman"
	},
	{
		quote: "I love, lamp.", 
		source: "Brick Tamland",
		title: "Sidekick #4"
	},
	{
		quote: "They've done studies, you know. 60% of the time, it works every time.", 
		source: "Brian Fantana",
		title: "The Racoon in the Fax Machine"
	},
	{
		quote: "I'M IN A GLASS CASE OF EMOTION!", 
		source: "Ron Burgundy",
		year: 2004 
	},
	{
		quote: "I DON'T KNOW WHAT WE'RE YELLING ABOUT!....LOUD NOISES!", 
		source: "Brick Tamland",
		citation: "Anchorman: The Legend of Ron Burgundy"
	}

]

/***
 * Helper functions for the printQuote() functions
***/

//Generate random number to later select a random object in the quotes array
function getRandomQuote(){

	const lengthOfQuotes = quotes.length
	const randomNumber = Math.floor(Math.random() * lengthOfQuotes)

	return quotes[randomNumber]
}

//Generate a random color for changing the background color
//Used the function suggested by Anatoliy in this Stackoverflow answer: https://stackoverflow.com/a/1484514

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//Change the background color of the body
function setRandomBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

/***
 
* Cycles through quotes array. 
* Changes the background color
* Selects a random object out of the quotes array
* Checks the object for what keys are available
* Adds the values of available keys to a paragraph following the main quote

***/

function printQuote () {

	setRandomBackgroundColor()

	const randomQuote = getRandomQuote()

	let htmlString = ""
	htmlString += '<p class="quote">' + randomQuote.quote + '</p>'
	htmlString += '<p class="source">' + randomQuote.source
	if ("citation" in randomQuote) {
		htmlString += '<span class="citation">' + randomQuote.citation + '</span>'
	} 
	if ("title" in randomQuote) {
		htmlString += '<span class="title">' + randomQuote.title + '</span>'
	}

	if ("year" in randomQuote) {
		htmlString += '<span class="year">' + randomQuote.year + '</span>'
	}
	htmlString += '</p>'

	document.getElementById('quote-box').innerHTML = htmlString

}

//Manually change the quotes by clicking the "Show another quote" html button by calling printQuote()
document.getElementById('load-quote').addEventListener("click", printQuote, false);

//Automatically cycle through quotes every 15 seconds by calling print quote
setInterval(printQuote, 15000);