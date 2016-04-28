var iconStackAreaReady = false;
var stackAreaImage = new Image();

var stackArea = new Array(3);

stackAreaImage.src = "images/StackArea.png";

var stackLocation = {
	x: 512,
	y: 400
};

for (var s = 0; s < 3; s++)
{
	stackArea[s] = [' ', ' ', ' '];
}

console.log(stackArea[0][0]);

function SetStackArea(stackNum, boxId)
{
	for(var y = 0; y < 3; y++)
	{
		//console.log(stackArea[stackNum][y])
		if (stackArea[stackNum][y] == ' ')
		{
			stackArea[stackNum][y] = boxId;
			console.log ("Added: " + boxId.boxId);
			return true; 
		}
		
	}
	return false;
}

var something = false;
function CheckStackLines()
{
	var removeBoxes = new Array(3);
	for (var r = 0; r < 3; r++)
	{
		removeBoxes[r] = [false, false, false];
	}
	
	if (stackArea[0][0].boxId == stackArea[0][1].boxId && stackArea[0][1].boxId == stackArea[0][2].boxId && stackArea[0][0] != ' ')
	{
		removeBoxes[0] = [true, true, true];
		something = true;
	}
	
	if (stackArea[1][0].boxId == stackArea[1][1].boxId && stackArea[1][1].boxId == stackArea[1][2].boxId && stackArea[1][0] != ' ')
	{
		removeBoxes[1] = [true, true, true];
		something = true;
	}
	
	if (stackArea[2][0].boxId == stackArea[2][1].boxId && stackArea[2][1].boxId == stackArea[2][2].boxId && stackArea[2][0] != ' ')
	{
		removeBoxes[2] = [true, true, true];
		something = true;
	}
	
	if (stackArea[0][0].boxId == stackArea[1][0].boxId && stackArea[1][0].boxId == stackArea[2][0].boxId && stackArea[0][0] != ' ')
	{
		removeBoxes[0][0] = true; removeBoxes[1][0] = true; removeBoxes[2][0] = true;
		something = true;
	}
	
	if (stackArea[0][1].boxId == stackArea[1][1].boxId && stackArea[1][1].boxId == stackArea[2][1].boxId && stackArea[0][1] != ' ')
	{
		removeBoxes[0][1] = true; removeBoxes[1][1] = true; removeBoxes[2][1] = true;
		something = true;
	}
	
	if (stackArea[0][2].boxId == stackArea[1][2].boxId && stackArea[1][2].boxId == stackArea[2][2].boxId && stackArea[0][2] != ' ')
	{
		removeBoxes[0][2] = true; removeBoxes[1][2] = true; removeBoxes[2][2] = true;
		something = true;
	}
	
	if (stackArea[0][0].boxId == stackArea[1][1].boxId && stackArea[1][1].boxId == stackArea[2][2].boxId && stackArea[0][0] != ' ')
	{
		removeBoxes[0][0] = true; removeBoxes[1][1] = true; removeBoxes[2][2] = true;
		something = true;
	}
	
	if (stackArea[2][0].boxId == stackArea[1][1].boxId && stackArea[1][1].boxId == stackArea[0][2].boxId && stackArea[2][0] != ' ')
	{
		removeBoxes[2][0] = true; removeBoxes[1][1] = true; removeBoxes[0][2] = true;
		something = true;
	}
	
	if (something)
	{
		RemoveLines(removeBoxes);
	}
	else
	{
		CheckStackFull();
	}
	
}

function ClearButton()
{
	for (var s = 0; s < 3; s++)
	{
		stackArea[s] = [' ', ' ', ' '];
	}
}

function CheckStackFull()
{
	var gameover = true;
	if (stackArea[2][0] == ' ' || stackArea[2][1] == ' ' || stackArea[2][2] == ' ')
	{
		gameover = false;
	}
	else
	{
		console.log("No More Space");
		
	}
	//Add check for Clear button
}

function RemoveLines(removeBoxes)
{
	var rCount = 0;
	for (var rx = 0; rx < 3; rx++)
	{
		for (var ry = 0; ry < 3; ry++)
		{
			if (removeBoxes[rx][ry])
			{
				stackArea[rx][ry] = ' ';
				removeBoxes[rx][ry] = false;
				rx = 0;
				ry = 0;
				rCount++;
			}
		}
	}
	
	ApplyScore("Boxes", rCount);
	something = false;
	CheckBoxesPosition();
}

function CheckBoxesPosition()
{
	for (var sx = 0; sx < 3; sx++)
	{
		var last = false;
		for (var sy = 0; sy < 3; sy++)
		{
			if (stackArea[sx][sy] == ' ')
			{
				last = true;
			}
			else
			{
				if (last)
				{
					console.log("moving");
					stackArea[sx][sy - 1] = stackArea[sx][sy]; 
					stackArea[sx][sy] = ' ';
					sx = 0;
					sy = 0;
					last = false;
				}
			}
		}
	}
}