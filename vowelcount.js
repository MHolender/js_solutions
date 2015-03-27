// Challenge: Build a function vowelCount() which takes a string and returns 
// the number of vowels (AEIOUY).

var phrase;

function isVowel(value) {
	value = value.toLowerCase();
	
	if (value==="a" || value==="e" || value==="i" || value==="o" || value==="u" || value==="y") {
		return 1;
	} else { return 0; }
	
}

function vowelCount(string) {
	var i, numberOfVowels = 0, testArr = string.split('');
	
	// It wasn't immediately obvious to me how to accomplish this with .forEach
	// so I switched to using a for statement.
	
	for (i=0; i<testArr.length; i++) {
		numberOfVowels += isVowel(testArr[i]);
	}
		
	return numberOfVowels;
}

phrase = prompt("Enter a phrase:");
		
alert("Phrase had " + vowelCount(phrase) + " vowels.");
