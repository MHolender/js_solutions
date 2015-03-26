// Challenge: Build a function vowelCount() which takes a string and returns 
// the number of vowels (AEIOUY).

var numberOfVowels, phrase;

function isVowel(value) {
	value = value.toLowerCase();
	if (value==="a" || value==="e" || value==="i" || value==="o" || value==="u" || value==="y") {
		numberOfVowels += 1;
	}
}

function vowelCount(string) {
	var testArr = string.split('');
	numberOfVowels = 0;
	
	testArr.forEach(isVowel);
	
	return numberOfVowels;
}

phrase = prompt("Enter a phrase:");
		
alert("Phrase had " + vowelCount(phrase) + " vowels.");
