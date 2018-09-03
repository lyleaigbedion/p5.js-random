function setup() {
	createCanvas(windowWidth, windowHeight);
	


}

function draw() {

	background(0);

	// create a variable and store
	// a random # to it
	var randomRed = random(255);
	var randomGreen = random(255);
	var randomBlue = random(255);

	//now assign a fill color
	fill(randomRed, randomGreen, randomBlue);

	// load a specific font
	textFont("Comic Sans MS");

	// alligns the text
	textAlign(CENTER, CENTER);

	//changes the font size
	textSize(100);

	text("Hello World!", width/2, height/2);

	//draw a random color circle
	//noStroke();
	//ellipse(mouseX, mouseY, 50, 50);
	

}

