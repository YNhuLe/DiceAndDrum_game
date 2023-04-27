function draw() {
  // random dice 1
  var randomNum1 = Math.floor(Math.random() * 6 + 1);
  var randomDiceImage1 = "dice" + randomNum1 + ".png";
  var randomImageSource1 = "images/" + randomDiceImage1;
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
  //random dice 2
  var randomNum2 = Math.floor(Math.random() * 6 + 1);
  var randomImageSource2 = "images/dice" + randomNum2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  //if condition to check who win
  if (randomNum1 > randomNum2) {
    document.querySelectorAll("h1")[0].innerHTML =
      "player 1 win, you can play the drum now!!";
  } else if (randomNum1 < randomNum2) {
    document.querySelectorAll("h1")[0].innerHTML =
      "Player 2 win, you can play the drum now!!";
  } else {
    document.querySelectorAll("h1")[0].innerHTML = "Draw again!";
  }
}
