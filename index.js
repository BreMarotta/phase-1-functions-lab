function distanceFromHqInBlocks(number){
//hq is on 42
if (number >= 42)
return number -42;
else return 42 - number;
}

function distanceFromHqInFeet(number){
    return distanceFromHqInBlocks(number) * 264;

}

function distanceTravelledInFeet(number2,number3){
    if (number2 > number3)
    return (number2 - number3) * 264; 
    else return (number3 - number2) * 264;
}
const number4= distanceTravelledInFeet();


function calculatesFarePrice(number2, number3){
    if (distanceTravelledInFeet(number2, number3)<=400)
    {return 0;}
    else if (distanceTravelledInFeet(number2, number3)>=400 && distanceTravelledInFeet(number2, number3)<=2000)
    {return (distanceTravelledInFeet(number2, number3)-400)*.02}
    else if (distanceTravelledInFeet(number2, number3)>=2000 && distanceTravelledInFeet(number2, number3)<=2500)
    {return 25;}
    else if (distanceTravelledInFeet(number2, number3)>=2500)
    {return 'cannot travel that far'}
}
