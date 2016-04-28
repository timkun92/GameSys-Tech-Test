addEventListener("keydown", Click);
addEventListener("keyup", Release);
			
var space = false;
var fKey = false;
var gKey = false; 
var hKey = false;
var jKey = false;
			
function Click(e)
{
	if (32 == e.keyCode && !space)
	{
		space = true;					
		AddingRandomBox();
	}
		
	if (70 == e.keyCode && !fKey)
	{
		fKey = true;
		RemoveBox(0);
	}
			
	if (71 == e.keyCode && !gKey)
	{
		gKey = true;
		RemoveBox(1);
	}
	
	if (72 == e.keyCode && !hKey)
	{
		hKey = true;
		RemoveBox(2);
	}
	
	if (74 == e.keyCode && !jKey)
	{
		jKey = true;
		ClearButton();
	}
	
}
			
function Release(e)
{
	if (32 == e.keyCode)
	{
		space = false;
	}
		
	if (70 == e.keyCode)
	{
		fKey = false;
	}
			
	if (71 == e.keyCode)
	{
		gKey = false;
	}
		
	if (72 == e.keyCode)
	{
		hKey = false;
	}
				
	if (74 == e.KeyCode)
	{
		jKey = false;
	}
}

function BtnStart(value)
{
	var startButton = document.getElementById('StartBtn');
	if (value)
	{
		startButton.src = "images/StartPush.png";
		
		if (startGame)
		{
			return;
		}
		else
		{
			restartGame();
		}
	}
	else
	{
		startButton.src = "images/Start.png";
	}
	
}

function BtnStack1(value)
{
	
	var stack1Button = document.getElementById('Stack1Btn');
	if (value)
	{
		stack1Button.src = "images/StackPush.png";
		ApplyStack(0);
	}
	else
	{
		stack1Button.src = "images/Stack.png";
	}
}

function BtnStack2(value)
{
	var stack2Button = document.getElementById('Stack2Btn');
	if (value)
	{
		stack2Button.src = "images/StackPush.png";
		ApplyStack(1);
	}
	else
	{
		stack2Button.src = "images/Stack.png";
	}
}

function BtnStack3(value)
{
	
	var stack3Button = document.getElementById('Stack3Btn');
	if (value)
	{
		stack3Button.src = "images/StackPush.png";
		ApplyStack(2);
	}
	else
	{
		stack3Button.src = "images/Stack.png";
	}
}

function ApplyStack(value)
{
	if (startGame)
	{
		RemoveBox(value);
	}
}
			
function BtnAdd1(value)
{
	var add1Button = document.getElementById('Add1Btn');
	if (value)
	{
		add1Button.src = "images/+1Push.png";
		ApplyBid(1);
	}
	else
	{
		add1Button.src = "images/+1.png";
	}
}
			
function BtnAdd10(value)
{
	var add10Button = document.getElementById('Add10Btn');
	if (value)
	{
		add10Button.src = "images/+10Push.png";
		ApplyBid(10);
	}
	else
	{
		add10Button.src = "images/+10.png";
	}
}
			
function BtnSub1(value)
{
	var sub1Button = document.getElementById('Sub1Btn');
	if (value)
	{
		sub1Button.src = "images/-1Push.png";
		ApplyBid(-1);
	}
	else
	{
		sub1Button.src = "images/-1.png";
	}
}
	
function BtnSub10(value)
{
	var sub10Button = document.getElementById('Sub10Btn');
	if (value)
	{
		sub10Button.src = "images/-10Push.png";
		ApplyBid(-10);
	}
	else
	{
		sub10Button.src = "images/-10.png";
	}
}

function ApplyBid(value)
{
	if (!startGame)
	{
		if(value > 0)
		{
			if (user.credit >= value)
			{
				betAmount += value;
				user.credit -= value;
			}
			else
			{
				betAmount += user.credit;
				user.credit = 0; 
			}
		}
		else if (value < 0)
		{
			if (betAmount >= (value * -1))
			{
				betAmount += value;
				user.credit -= value;
			}
			else
			{
				user.credit += betAmount;
				betAmount = 0;
			}
		}
	}
}