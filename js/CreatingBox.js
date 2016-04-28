//Adding Images
var iconBoxRedReady = false;
var iconBoxRed = new Image();
var iconBoxBlueReady = false;
var iconBoxBlue = new Image();
var iconBoxGreenReady = false;
var iconBoxGreen = new Image();
var iconBoxWhiteReady = false;
var iconBoxWhite = new Image();


iconBoxRed.src = "images/BoxRed.png";
iconBoxBlue.src = "images/BoxBlue.png";
iconBoxGreen.src = "images/BoxGreen.png";
iconBoxWhite.src = "images/BoxWhite.png";

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
	
	var randomInt = Math.floor((Math.random() * 3) + 1);
	
	var id;
	var icon;
		switch (randomInt)
		{
			case 1:
				id = 'R';
				icon = iconBoxRed;
				break;
			case 2:
				id = 'B';
				icon = iconBoxBlue;
				break;
			case 3:
				id = 'G';
				icon = iconBoxGreen;
				break;
			default:
				console.log("Unknown Number");
		}
	
	var newBox = {
		boxId: id,
		img: icon,
		movementSpeed: 10,
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
	for (var b = 0; b < boxList.length; b++)
	{
		ctx.drawImage(boxList[b].img,boxList[b].x, boxList[b].y, 96, 96 );
	}
}

function DrawStackAreaBoxes(ctx)
{
	ctx.drawImage(stackAreaImage, stackLocation.x - 175, stackLocation.y - 125, 350,350);
	
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




