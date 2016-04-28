function BetCheck(value)
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
	
	BoxValue();
}

function BoxValue()
{
	boxValue = 0.25 * Math.sqrt(betAmount);
}

function ApplyScore(type, value)
{
	switch (type)
	{
		case ("Boxes"):
			user.boxes += value;
			wonCredit += boxValue * value;
			//console.log("Boxes: " + user.boxes);
			break;
	}
	
}

function ApplyCredit()
{
	
	user.credit += wonCredit - betAmount;
	wonCredit = 0;
}