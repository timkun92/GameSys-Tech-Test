

//Adding Images
var iconBoxRedReady = false;
var iconBoxRed = new Image();
var iconBoxBlueReady = false;
var iconBoxBlue = new Image();
var iconBoxGreenReady = false;
var iconBoxGreen = new Image();

/*
var box = {
	movementSpeed: 20, x: 0, y: 100
};
*/

iconBoxRed.src = "images/BoxRed.png";
iconBoxBlue.src = "images/BoxBlue.png";
iconBoxGreen.src = "images/BoxGreen.png";

var boxList = [];
var boxLimit = 5;
var boxCount = 0;

iconBoxRed.onload = function() {
	iconBoxRedReady = true;
}
	
iconBoxBlue.onload = function() {
	iconBoxBlueReady = true;
}

iconBoxGreen.onload = function() {
	iconBoxGreenReady = true;
}

function AddingRandomBox()
{
	console.log("Adding Box");
	
	if (boxCount >= boxLimit)
	{
		return;
	}
	else
	{
		boxCount++;
	}
	
	var randomInt = Math.floor((Math.random() * 3) + 1);
	
	var icon;
		switch (randomInt)
		{
			case 1:
				icon = iconBoxRed;
				break;
			case 2:
				icon = iconBoxBlue;
				break;
			case 3:
				icon = iconBoxGreen;
				break;
			default:
				console.log("Unknown Number");
		}
	
	var newBox = {
		img: icon,
		movementSpeed: 5,
		id: randomInt,
		x: 0,
		y: 100
	};
	
	boxList.push(newBox);
	
	console.log("Random Number: " + randomInt);
	
}

function BoxMovement(m)
{
	for (var i = 0; i < boxList.length; i++)
	{
		if (boxList[i].x < (500 - (i * 100)))
		{
			boxList[i].x += boxList[i].movementSpeed;
		}
		else
		{
			boxList.x = 300;
		}
		
	}
}

function RemoveBox()
{
	if (boxCount <= 0)
	{
		return;
	}
	else
	{
		boxList.splice(0, 1);
	}
	
	boxCount--;
	
	
}

function DrawBox(ctx)
{
	
	
	for (var b = 0; b < boxList.length; b++)
	{
		ctx.drawImage(boxList[b].img,boxList[b].x, boxList[b].y, 96, 96 );
	}
}




