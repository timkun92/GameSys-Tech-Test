var iconStackAreaReady = false;
var stackAreaImage = new Image();
var iconClearStack = new Image();

var stackArea = new Array(3);

stackAreaImage.src = "images/StackArea.png";
iconClearStack.src = "images/ClearIcon.png"

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
			stackSound.play();
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
	
	RemoveLines(removeBoxes);
	
	if (!something)
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
	if (stackArea[0][2] != ' ' && stackArea[1][2] != ' ' && stackArea[2][2] != ' ')
	{
		console.log(stackArea[2][0]);
		console.log("No More Space");
		if (clearCount <= 0)
		{
			//startGame = false;
			//timeLeft = 0;
			stackFail = true;
		}
		
	}
	//Add check for Clear button
}

function RemoveLines(removeBoxes)
{
	var rCount = 0;
	var fCount = 0;
	for (var rx = 0; rx < 3; rx++)
	{
		for (var ry = 0; ry < 3; ry++)
		{
			if (removeBoxes[rx][ry])
			{
				console.log(rx + " " + ry);
				if (stackArea[rx][ry].fragile)
				{ 
					fCount++;
				}
				else
				{
					rCount++;
				}
				stackArea[rx][ry] = ' ';
				removeBoxes[rx][ry] = false;
				rx = 0;
				ry = 0;
				
			}
		}
	}
	
	if (rCount > 0)
	{
		lineSound.play();
	}	
	ApplyScore(rCount, fCount);
	something = false;
	CheckBoxesPosition();
}

function CheckBoxesPosition()
{
	console.log("Checking");
	for (var sx = 0; sx < 3; sx++)
	{
		var last = false;
		var fragile = false;
		for (var sy = 0; sy < 3; sy++)
		{
			if (stackArea[sx][sy] == ' ')
			{
				last = true;
			}
			else if (stackArea[sx][sy].fragile && !last && !fragile)
			{
				fragile = true;
			}
			else
			{
				if (last)
				{
					stackArea[sx][sy - 1] = stackArea[sx][sy];
					stackArea[sx][sy] = ' ';
					sx = 0;
					sy = 0;
					last = false;
				}
				else if (fragile)
				{
					stackArea[sx][sy - 1] = stackArea[sx][sy];
					stackArea[sx][sy] = ' ';
					sx = 0;
					sy = 0;
					breakSound.play();
					last = false;
					fragile = false;
				}
			}
		}
	}
}