// Challenge: Build a function vowelCount() which takes a string and returns 
// the number of vowels (AEIOUY).
// This version avoids testing for each vowel with OR -- because what if I have
// fifty characters to test for?

var phrase;

function isVowel(value) {
	value = value.toLowerCase();
	var vowels = "aeiouy"
	
	if (vowels.indexOf(value) !== -1) {
		return 1;
	} else {
		return 0;
	}
	
}

function vowelCount(string) {
	var i, numberOfVowels = 0, testArr = string.split('');
	
	for (i=0; i<testArr.length; i++) {
		numberOfVowels += isVowel(testArr[i]);
	}
		
	return numberOfVowels;
}

phrase = prompt("Enter a phrase:");
		
alert("Phrase had " + vowelCount(phrase) + " vowels.");
