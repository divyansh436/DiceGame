var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);
var randomDiceimage = "dice" + randomNumber1 + ".png";
var randomDicesrc = "images/"+ randomDiceimage;
var randomDiceimage2 = "dice" + randomNumber2 + ".png";
var randomDicesrc2 = "images/"+ randomDiceimage2;

document.querySelectorAll("img")[0].setAttribute("src",randomDicesrc);
document.querySelectorAll("img")[1].setAttribute("src",randomDicesrc2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!";
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
}