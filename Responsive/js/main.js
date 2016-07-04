

var navEls = document.getElementsByTagName("ul");
for(var i = 0; i < navEls.length; i++) {
	navEls[i].innerHTML.style.color = "white";
}
var carouselEl = document.querySelector("#myCarousel");
carouselEl.style.background = "salmon";
var c = document.getElementById("canvas1");
var context = c.getContext("2d");

// Create gradient
var grd = context.createLinearGradient(0,0,100,0);
grd.addColorStop(0,"yellow");
grd.addColorStop(1,"white");
// Fill with gradient
context.fillStyle = grd;
context.fillRect(0,0,300,50);


context.fillStyle="blue";
context.fillRect(170, 0, 300, 50);



//Draw the face
context.beginPath();
context.arc(170, 170, 120, 0, 2*Math.PI);
context.stroke();

//Dra left eye
context.beginPath();
context.arc(120, 105, 20, 0, 2*Math.PI);
context.stroke();

//Draw right eye
context.beginPath();
context.arc(220, 105, 20, 0, 2*Math.PI);
context.stroke();

//Draw the mouth
context.beginPath();
context.arc(170, 250, 10, 0, 2*Math.PI);
context.stroke();

//Draw the nose
context.moveTo(170, 120);
context.lineTo(185, 170);
context.stroke();

context.moveTo(185, 168);
context.lineTo(168, 185);
context.stroke();

var x=10; //Car position
var speed = 1;
//toggle the while on an of to see the car moving

var draw = function() {

//Draw the car

var canvas2 = document.getElementById("canvas2");
var context2 = canvas2.getContext("2d");

context2.fillStyle="pink";
context2.fillRect(0, 0, canvas2.width, canvas2.height);
	//build the body
	context2.fillStyle="red";
	context2.fillRect(x+40, 40, 120, 50);
	context2.fillRect(x, 70, 200, 70);

	//build the wheels
	
	context2.fillStyle="black";
	context2.beginPath();
	context2.arc(x+40, 140, 20, 30, 50);
	context2.arc(x+170, 140, 20, 30, 50);
	context2.fill();
	x=x+speed;
};
draw();


//Draw the grass and sun in the sky

var canvas3 = document.getElementById("canvas3");
var context3 = canvas3.getContext("2d");

//Draw the sky
context3.fillStyle = "#00C4FF";
context3.fillRect(0, 0, 400, 150);

//Draw the grass
context3.fillStyle="#00FA00";
context3.fillRect(0, 150, 400, 150);

//Draw the sun
context3.fillStyle="yellow";
context3.beginPath();
context3.arc(200, 40, 30, 0, 2*Math.PI);
context3.stroke();
context3.fill();
