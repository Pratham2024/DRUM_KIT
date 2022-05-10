for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.textContent;

    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML);

  });

}


// document.querySelectorAll(".drum")[i].addEventListener("click", op);
//
//
// function op() {
//
//   var buttonInnerHTML = this.textContent;
//
//   makeSound(buttonInnerHTML)
//   buttonAnimation(buttonInnerHTML);
//
// }
//
// }// aise function define karenge to bhi kaam karega

document.addEventListener("keydown",function(event){

  makeSound(event.key);
  buttonAnimation(event.key);// key  keydown ke andr ek property defined hai jisme ye store hota hai ki konsi key press hui

});

function makeSound(key){

  switch (key) {

    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Press the right key , you pressed '"+key+"' .");

  }

}

function buttonAnimation(currentKey){

  var activeKey=document.querySelector("."+currentKey);
  activeKey.classList.add("pressed");

setTimeout(yo,100); // vo pura function ke parameter hai

//ek tarika ye bhi hai ki-->>
// setTimeout(function(){
//     activeKey.classList.remove("pressed");
// },100);exactly same hai jo upr likha hai

function yo(){
  activeKey.classList.remove("pressed");
}

}



// var audio ="sounds/tom-"+i+".mp3";
//  var sound=new Audio(audio);
//  sound.play();
