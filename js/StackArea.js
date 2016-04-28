var iconStackAreaReady = false;
var stackAreaImage = new Image();

var stackArea = new Array(3);

var stackLocation = {
	x: 0,
	y: 500
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
	
	
	/*
	//check if there are lines
	for (var lx = 0; lx < 3; lx ++)
	{
		var checkStack = [];
		checkStack.push(0);
		var typeCheck = stackArea[lx][0].boxId;
		for (var ly = 1; ly < 3; ly++)
		{
			if (typeCheck == stackArea[lx][ly].boxId)
			{
				checkStack.push(ly);
			}
			else
			{
				checkStack.splice(0);
				break;
			}
		}
		if (checkStack.length > 2)
		{
			var x;
			for(x in checkStack)
			{
				removeBoxes[count] = [lx][checkStack[x]];
				count++;
			}				
		}
	}
	*/
	if (something)
	{
		RemoveLines(removeBoxes);
		
	}
	
}


function RemoveLines(removeBoxes)
{
	for (var rx = 0; rx < 3; rx++)
	{
		for (var ry = 0; ry < 3; ry++)
		{
			if (removeBoxes[rx][ry])
			{
				stackArea[rx][ry] = ' ';
				//stackArea[rx].splice(ry,1);
				removeBoxes[rx][ry] = false;
				//removeBoxes[rx].splice(ry,1);
				rx = 0;
				ry = 0;
			}
		}
	}
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