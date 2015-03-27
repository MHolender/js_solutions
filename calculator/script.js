var one = document.getElementById("1");
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
	buttonInput(' = ');
};
buttons[15].onmousedown = function () {	
	clearAll();
};
buttons[16].onmousedown = function () {
	buttonInput('.');
};

