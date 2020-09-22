window.onload = getYear();

function getYear () {
  let date = new Date();
  let year = date.getFullYear();
  document.getElementById("copyright").innerHTML = year;
}


window.onload = init;
function init() {
let drum = document.getElementsByClassName("drum");
for(let i = 0; i < drum.length; i++){
  drum[i].onclick  = playAudio;
}
};




function playAudio(eventObj){
  let audio = new Audio;
  let drum = eventObj.target;
  let name = drum.id;
  name = name + ".mp3"
  audio.src = "Sounds/" + name;
  audio.play();
}




window.addEventListener('keydown', function (event){
let spacebar = new Audio ("Sounds/bass.mp3");
let c = new Audio("Sounds/snare.mp3");
let s = new Audio("Sounds/hihat.mp3");
let b = new Audio("Sounds/floortom.mp3");
let g = new Audio("Sounds/smalltom.mp3");
let h = new Audio("Sounds/mediumtom.mp3");
let r = new Audio("Sounds/cymbal1.mp3");
let t = new Audio("Sounds/cymbal2.mp3")
if(event.keyCode === 32) spacebar.play();
else { if(event.keyCode === 67) c.play();
else { if(event.keyCode === 67) c.play();
else { if(event.keyCode === 83) s.play();
else { if(event.keyCode === 66) b.play();
else { if(event.keyCode === 71) g.play();
else { if(event.keyCode === 72) h.play();
else { if(event.keyCode === 82) r.play();
else { if(event.keyCode === 84) t.play();
}}}}}}}}
});
