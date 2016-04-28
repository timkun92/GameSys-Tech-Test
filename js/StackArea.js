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

function CheckStackLines()
{
	
}