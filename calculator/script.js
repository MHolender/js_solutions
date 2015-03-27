var calcConsole = document.getElementById("output");
var catInput = ''; // string to contain concatenation of all button input
                   // we're going to write an awesome function to parse this!
var buttons = document.getElementsByClassName("button");

function display() {
	calcConsole.innerHTML = catInput;
};

function buttonInput(string) {
	catInput = catInput + string;
	display();
}

function clearAll () {
	catInput = '';
	display();
}

// The mantra is "eval is evil" but I wonder if it wouldn't have been
// called for here, where I could easily pass the string generated by
// the buttons to eval and save creating all these functions. The input is 
// limited to numerals and operators so maybe eval would be safe here.

function convert(equation) {
	var i;
	for (i=0; i<equation.length; i++) {
		if (parseFloat(equation[i] !== NaN)) {
			equation[i] = parseFloat(equation[i]);
		}
	}
	return equation;
}

function multDiv(equation) {
	var i, subProb;
	for (i=1; i<equation.length; i+=2) {
		
		if (equation[i] === 'x') {
			subProb = equation[i-1] * equation[i+1];
			if (subProb === NaN) {
				return false;
			}
			equation.splice(i-1, 3, subProb)
		}
		
		if (equation[i] === '/') {
			subProb = equation[i-1] / equation[i+1];
			if (subProb === NaN) {
				return false;
			}
			equation.splice(i-1, 3, subProb)
		}
	}
	
	return equation;
}

function addSub(equation) {
	var i, subProb;
	for (i=1; i<equation.length; i+=2) {
		
		if (equation[i] === '+') {
			subProb = equation[i-1] + equation[i+1];
			if (subProb === NaN) {
				return false;
			}
			equation.splice(i-1, 3, subProb)
		}
		
		if (equation[i] === '-') {
			subProb = equation[i-1] - equation[i+1];
			if (subProb === NaN) {
				return false;
			}
			equation.splice(i-1, 3, subProb)
		}
	}
	
	return equation;
}

function solve () {
	var equation = catInput.split(' ');
	
	function fail () {
		catInput = '';
		calcConsole.innerHTML = 'Equation was entered incorrectly. Press CLR ' +
		'to continue.';
	}
	
	function displaySolution(num) {
		var msgP;		
		msgP = document.createElement("P");
		solutionMsg = document.getElementById("console").appendChild(msgP)
		solutionMsg.innerHTML = "Solution: " + catInput + " = " + num;
		clearAll();
	}
	
	// convert strings to numbers
	equation = convert(equation);
	
	// order of operations
	
	if (equation.indexOf('x') !== -1 || equation.indexOf('/') !== -1) {
		// multDiv will return an array with the multiplication
		// and division operations already performed.
		equation = multDiv(equation);
		if (!equation) { return fail(); }
	}
	
	if (equation.indexOf('+') !== -1 || equation.indexOf('-') !== -1) {
		equation = addSub(equation);
		if (!equation) { return fail(); }
	}
	
	// one last check
	if (equation.length !== 1) { return fail(); }
	
	return displaySolution(equation[0]);
	
}

window.onload = function () {
	buttons[0].onmousedown = function () {
		buttonInput('1');
	};
	buttons[1].onmousedown = function () {
		buttonInput('2');
	};
	buttons[2].onmousedown = function () {
		buttonInput('3');
	};
	buttons[3].onmousedown = function () {
		buttonInput(' + ');
	};
	buttons[4].onmousedown = function () {
		buttonInput('4');
	};
	buttons[5].onmousedown = function () {
		buttonInput('5');
	};
	buttons[6].onmousedown = function () {
		buttonInput('6');
	};
	buttons[7].onmousedown = function () {
		buttonInput(' - ');
	};
	buttons[8].onmousedown = function () {
		buttonInput('7');
	};
	buttons[9].onmousedown = function () {
		buttonInput('8');
	};
	buttons[10].onmousedown = function () {
		buttonInput('9');
	};
	buttons[11].onmousedown = function () {
		buttonInput(' x ');
	};
	buttons[12].onmousedown = function () {
		buttonInput('0');
	};
	buttons[13].onmousedown = function () {
		buttonInput(' / ');
	};
	buttons[14].onmousedown = function () {
		/* buttonInput(' = '); We're going to print an equals manually in the
		solution space */
		solve();
	};
	buttons[15].onmousedown = function () {	
		clearAll();
	};
	buttons[16].onmousedown = function () {
		buttonInput('.');
	};
};
