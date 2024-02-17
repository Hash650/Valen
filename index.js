// var crashSound = new Audio("./sounds/crash.mp3");
// var kickBass = new Audio("./sounds/kick-bass.mp3");
// var snare = new Audio("./sounds/snare.mp3");
// var tom1 = new Audio("./sounds/tom-1.mp3");
// var tom2 = new Audio("./sounds/tom-2.mp3");
// var tom3 = new Audio("./sounds/tom-3.mp3");
// var tom4 = new Audio("./sounds/tom-4.mp3");

// function returnAudio(key) {
//   switch (key) {
//     case "w":
//       return new Audio("./sounds/crash.mp3");

//     case "a":
//       return new Audio("./sounds/kick-bass.mp3");

//     case "s":
//       return new Audio("./sounds/snare.mp3");

//     case "d":
//       return new Audio("./sounds/tom-1.mp3");

//     case "j":
//       return new Audio("./sounds/tom-2.mp3");

//     case "k":
//       return new Audio("./sounds/tom-3.mp3");

//     case "l":
//       return new Audio("./sounds/tom-4.mp3");

//     default:
//       break;
//   }
// }

function changeDoneBox() {
  $(".done-box").on("click", function (e) {
    this.className = "ending-text";
    this.innerHTML = "Thank you for your time Princess";

    // console.log(e);

    setTimeout(function () {
      e.target.className = "option done-box";
      e.target.innerHTML = "Done";
      location.href = "./index.html";
    }, 5000);
  });
}

function buttonAnimation(keyPressed) {
  document.querySelector("." + keyPressed).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + keyPressed).classList.remove("pressed");
  }, 50);
}

for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {
  document
    .querySelectorAll("button.drum")
    [i].addEventListener("click", function () {
      var key = this.getAttribute("class").charAt(0); // letter on the button being clicked
      // var audio = returnAudio(key); // attach an audio object to the var according to the keypressed
      // audio.play(); // play audio
      buttonAnimation(key); // animate effect for a pressed or clicked button
    });
}

changeDoneBox();

function showButtonPopUp() {
  $("button.drum").click(function (e) {
    e.preventDefault();
    var key = this.className[0];
    console.log(key);

    $(".btn-text-" + key).slideDown();

    setTimeout(function () {
      $(".btn-text-" + key).slideUp();
    }, 2000);
  });
}

showButtonPopUp();

// document.addEventListener("keydown", function (e) {
//   if (
//     e.key == "a" ||
//     e.key == "w" ||
//     e.key == "s" ||
//     e.key == "d" ||
//     e.key == "j" ||
//     e.key == "k" ||
//     e.key == "l"
//   ) {
//     console.log("hello world");
//     var audio = returnAudio(e.key); // attach an audio object to the var according to the keypressed
//     audio.play();
//     buttonAnimation(e.key);
//   }
// });
