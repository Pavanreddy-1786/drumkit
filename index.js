var numberofbtn = document.querySelectorAll(".drum").length;    //to know number of button we have in this pgm

for(i=0;i<numberofbtn;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {   //this will give message when we select each drum with help of for loop

var buttonInnerHTML =this.innerHTML;
makeSound(buttonInnerHTML);
buttonannimation(buttonInnerHTML);
});
}

document.addEventListener("keydown",function(event){
makeSound(event.key);
buttonannimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;
    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
      break;
     case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
     break;
    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
     break;
    case "j":
    var kickbass = new Audio('sounds/kick-bass.mp3');
    kickbass.play();
     break;
    case "k":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
     break;
    case "l":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
     break;
    default:console.log(buttonInnerhtml);

}
}

function buttonannimation(currentkey){

var activebutton = document.querySelector("."+currentkey);
activebutton.classList.add("pressed");
setTimeout(function(){
  activebutton.classList.remove("pressed");
},100);
}
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
