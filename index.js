//number of drum buttons
var numOfDrumButtons = document.querySelectorAll(".drum").length;
//loop through the drum buttons
for (i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got clicked!");
    // var sound = new Audio("sounds/tom-1.mp3");
    // sound.play();

    var buttonHTML = this.innerHTML;
    switch (buttonHTML) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        this.style.color = "blue";

      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        this.style.color = "green";
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        this.style.color = "red";
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        this.style.color = "orange";
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        this.style.color = "purple";
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        this.style.color = "yellow";
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        this.style.color = "pink";
    }
  });
}
