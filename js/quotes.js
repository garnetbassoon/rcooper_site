var quotes = [
	"Don't tell me the moon is shining; show me the glint of light on broken glass. ~ Anton Chekhov ",
	"Writing is like driving at night in the fog. You can only see as far as your headlights, but you can make the whole trip that way. ~ E.L. Doctorow",
    "You must stay drunk on writing so reality cannot destroy you. ~ Ray Bradbury",
    "I try to leave out the parts that people skip. ~ Elmore Leonard",
    "If there's a book you really want to read, but it hasn't been written yet, then you must write it. ~ Toni Morrison",
    "Writing became such a process of discovery that I couldn't wait to get to work in the morning; I wanted to know what I was going to say. ~ Sharon O'Brien",
    "If my doctor told me I had only six minutes to live, I wouldn't brood. I'd type a little faster. ~ Isaac Asimov",
    "There are three rules for writing a novel. Unfortunately, no one knows what they are. ~ W. Somerset Maugham",
    "You can't think yourself out of a writing block; you have to write yourself out of a thinking block. ~ John Rogers", 
    "I'm not a very good writer, but I'm an excellent rewriter. ~ James Michener",
    "The six golden rules of writing -- Read, read, read, and write, write, write. ~ Ernest Gaines",
    "Exercise the writing muscle every day, even if it is only a letter, notes, a title list, a character sketch, a journal entry. Writers are like dancers, like athletes. Without that exercise, the muscles seize up. ~ Jane Yolen",
	"The only kind of writing is rewriting. ~ Ernest Hemingway",
	"Every writer I know has trouble writing. ~ Joseph Heller",
	"Half my life is an act of revision. ~ John Irving",
	"Writing is 1 percent inspiration, and 99 percent elimination. ~ Louise Brooks",
	"Vigorous writing is concise. ~ William Strunk",
	"The mere habit of writing, of constantly keeping at it, of never giving up, ultimately teaches you how to write. ~ Gabriel Fielding",
	"The beautiful part of writing is that you don't have to get it right the first time, unlike, say, a brain surgeon. You can always do it better, find the exact word, the apt phrase, the leaping simile. ~ Robert Cormier"
];

function getQuotes(){
    //Set the variable for randomizing quotes in array
    var newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    //Set the value for the newQuote variable
    document.getElementById("authors").innerHTML = newQuote;
}

//Set the variable to print the new, randomized quote to page 
var changeQuote = document.getElementById("authors");
//Set a event handler which will print the new quote upon the user click the button
changeQuote.addEventListener('click', getQuotes, false);

