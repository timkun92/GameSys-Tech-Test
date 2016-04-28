var iconStackAreaReady = false;
var stackAreaImage = new Image();

var stackArea = new Array(3);

for (var s = 0; s < 3; s++)
{
	stackArea[s] = [' ', ' ', ' '];
}

console.log(stackArea[0][0]);

function SetStackArea(stackNum, id)
{
	for(var y = 0; y < 3; y++)
	{
		//console.log(stackArea[stackNum][y])
		if (stackArea[stackNum][y] == ' ')
		{
			stackArea[stackNum][y] = id;
			console.log ("Added: " + id);
			return true; 
		}
		
	}
	return false;
}

function CheckStackLines()
{
	
}