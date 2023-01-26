let input = document.querySelector("input");
let btn = document.querySelector(".btn");
let overlay = document.querySelector(".overlay");
let game = document.querySelector(".game");
let result = document.querySelector(".game h2");
let trycount = document.querySelector("p span");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tryNum = 0;

let randomNumber = Math.ceil(Math.random() * numbers.length);

console.log(randomNumber);

function guessNum() {
  if (input.value)
   {
    if (input.value == randomNumber)
     {
      result.style.backgroundColor = "rgb(214, 172, 235)";
      result.innerHTML = "Well Done!";
      overlay.style.display = "block";
    } 
    else 
    {
      result.style.backgroundColor = "rgb(214, 172, 235)";
      result.innerHTML = "Try again";
      trycount.innerHTML -= 1;
      input.value="";
      if (trycount.innerHTML == 0) 
      {
        result.style.backgroundColor = "rgb(214, 172, 235)";
        result.innerHTML = "Game Over!";
        btn.classList.add("disable");
        overlay.style.display = "block";
        game.style.border=" 1px solid red"
      }
    }
  }
  return false;
}
