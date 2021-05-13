var randomNumber1=Math.floor(Math.random()*6)+1;
var source1="images/dice"+randomNumber1+".png";

var randomNumber2=Math.floor(Math.random()*6)+1;
var source2="images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",source1);

document.querySelector(".img2").setAttribute("src",source2);

if(randomNumber1==randomNumber2)
{
    document.querySelector(".head-container h1").innerHTML="Draw";
}
else if(randomNumber1<randomNumber2){
    document.querySelector(".head-container h1").innerHTML="Player 2 Win";
}
else
{
    document.querySelector(".head-container h1").innerHTML="Player 1 Win";
}