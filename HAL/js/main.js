//Captures the input


function takeInput(e) {
	if(e.which !=13) {
		return false;
	}
	var question = this.value;
	appendOutput("<p class='us'><b>Human &raquo;</b> " + question + "</p>", out);
	appendOutput("<p class='hal'><b>HAL &raquo;</b> " + processInput(question) + "</p>", out);
	appendOutput("<hr/>", out);


	this.focus();
	this.select();

	out.scrollByLines(100);
}


//Process input
function processInput(question) {
	var answer="I'm sorry, I'm afraid I can't do that...";

	if(question.toUpperCase()=="HELLO") {
		answer = "Hi!";
	}
	if(question.toUpperCase()=="WHO ARE YOU?") {
		answer = "My name is HAL";

	}
	if(question.toUpperCase()=="NICE TO MEET YOU HAL") {
		answer = "It's my pleasure";
	}
	
	return answer;
}
//Display output

function appendOutput(message, dest) {
	dest.innerHTML += message;
}

var input = document.getElementById("inText");
input.onkeyup=takeInput;
var out = document.getElementById("dialog");

input.focus();
