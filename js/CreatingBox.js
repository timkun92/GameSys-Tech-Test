//Adding Images
var iconBoxRedReady = false;
var iconBoxRed = new Image();
var iconBoxBlueReady = false;
var iconBoxBlue = new Image();
var iconBoxGreenReady = false;
var iconBoxGreen = new Image();
var iconBoxWhiteReady = false;
var iconBoxWhite = new Image();

var iconConveyorBelt = new Image();

var iconBoxRedF = new Image();
var iconBoxBlueF = new Image();
var iconBoxGreenF = new Image();
var iconBoxWhiteF = new Image();

var stackSound = new Audio('sound/drop.mp3');
var breakSound = new Audio('sound/break.wav');
var lineSound = new Audio('sound/line.wav');

iconBoxRed.src = "images/BoxRed.png";
iconBoxBlue.src = "images/BoxBlue.png";
iconBoxGreen.src = "images/BoxGreen.png";
iconBoxWhite.src = "images/BoxWhite.png";
iconConveyorBelt.src = "images/Conveyor.png";
iconBoxRedF.src = "images/BoxRedF.png";
iconBoxBlueF.src = "images/BoxBlueF.png";
iconBoxGreenF.src = "images/BoxGreenF.png";
iconBoxWhiteF.src = "images/BoxWhiteF.png";

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

iconBoxWhite.onload = function() {
	iconBoxWhiteReady = true;
}


function ClearBoxCounts()
{
	boxList.splice(0);
	boxCount = 0;
}

function AddingRandomBox()
{
	//console.log("Adding Box");
	
	if (boxCount >= boxLimit)
	{
		return;
	}
	else
	{
		boxCount++;
	}
	
	var randomInt = Math.floor((Math.random() * 4) + 1);
	
	var id;
	var icon;
	
	var frag = false;
	var randomFragile = Math.floor((Math.random() * 10) + 1);
	console.log(randomFragile);
	if (randomFragile == 1)
	{
		frag = true;
	}
	
	switch (randomInt)
	{
		case 1:
			id = 'R';
			if (frag){ icon = iconBoxRedF;}
			else{icon = iconBoxRed;}
			break;
		case 2:
			id = 'B';
			if (frag){ icon = iconBoxBlueF;}
			else{icon = iconBoxBlue;}
			break;
		case 3:
			id = 'G';
			if (frag){ icon = iconBoxGreenF;}
			else{icon = iconBoxGreen;}
			break;
		case 4:
			id = 'W';
			if (frag){ icon = iconBoxWhiteF;}
			else{icon = iconBoxWhite;}
			break;
		default:
			console.log("Unknown Number");
	}
	
	
	
	var newBox = {
		boxId: id,
		img: icon,
		fragile: frag,
		movementSpeed: 10,
		x: 0,
		y: 120
	};
	
	boxList.push(newBox);
	
	console.log("Random Number: " + randomInt);
	
}

function BoxMovement(m)
{
	for (var i = 0; i < boxList.length; i++)
	{
		if (boxList[i].x < (460 - (i * 100)))
		{
			boxList[i].x += boxList[i].movementSpeed;
		}
		else
		{
			boxList.x = 300;
		}
	}
}

function RemoveBox(stackNum)
{
	if (boxCount <= 0)
	{
		return;
	}

	var check = SetStackArea(stackNum, boxList[0]);
		
	if (check)
	{
		boxList.splice(0, 1);
		CheckStackLines();
		boxCount--;
	}
}

function DrawBox(ctx)
{
	ctx.drawImage(iconConveyorBelt, 0, 120, 600, 128);
	for (var b = 0; b < boxList.length; b++)
	{
		ctx.drawImage(boxList[b].img,boxList[b].x, boxList[b].y, 96, 96 );
	}
}

function DrawStackAreaBoxes(ctx)
{
	ctx.drawImage(stackAreaImage, stackLocation.x - 175, stackLocation.y - 115, 350,350);
	
	for(var x = 0; x < 3; x++)
	{
		for (var y = 0; y < 3; y++)
		{
			if (stackArea[x][y] != ' ')
			{
				ctx.drawImage(stackArea[x][y].img, stackLocation.x - 150 + (100 * x), (stackArea[x][y].y + (stackLocation.y) - (100 * y)), 100, 100);
			}
		}
	}
	
	
}




