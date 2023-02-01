// alert("hello");
//for first dice
var randomno1=Math.floor(Math.random()*6)+1;
var imagesource1st="images/dice"+randomno1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource1st);

// for second dice

// var randomno2=Maths.floor(Math.random()*6)+1;
// var imagesource2="images/dice"+randomno2+".png";
// document.querySelectorAll("img")[1].setAttribute("src",imagesource2);

var randomno2=Math.floor(Math.random()*6)+1;
var imagesource2nd="images/dice"+randomno2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource2nd);

if (randomno1>randomno2) {
    document.querySelector("h2").innerHTML="👑 player 1 wins!";
    alert("👑 player 1 wins!");
}
else if (randomno1<randomno2) {
    document.querySelector("h2").innerHTML="player 2 wins!👑";
    alert("player 2 wins!👑");
}
else{
    document.querySelector("h2").innerHTML="draw!";
    alert("oops draw");
}