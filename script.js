var timeDisplay = document.getElementById("time");
function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


var rando = document.getElementById("place");
var arr = ["at <b>Noamundi</b>", "at <b>Kolkata</b>","in <b>India</b>", "in <b>Jharkhand</b>", "in <b>West Bengal</b>", "at <b>Ranaghat</b>", "at <b>Ranchi</b>", "at <b>Chaibasa</b>", "at <b>Home</b>", "at <b>School</b>", "at <b>Tution</b>", "in a <b>Hotel</b>", "on <b>bed</b>", "in <b>bed</b>"];
function random() {
    var rand = arr[Math.floor(Math.random() * arr.length)];
    rando.innerHTML = rand;
}
random();

var nowPlaying = document.getElementById("text");
function magic(){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",'https://scraper2.onlineradiobox.com/jp.jpoppowerplaykawaii',false);
    Httpreq.send( null );
    var raw = Httpreq.responseText;
    var json_obj = JSON.parse(raw);
    var msg = json_obj.title
    nowPlaying.innerHTML = msg;
}   
setInterval(magic, 15000)

function aud_play_pause() {
  var myAudio = document.getElementById("myTune");
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}



function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


function vibrate(milli) { 
   navigator.vibrate(milli); 
} 

timeLeft=11;
function countdown() {
	timeLeft--;
	var sec = document.getElementById("seconds");
        var snds = String( timeLeft );
        var nw = "<h1><b>"+snds + " second(s)"+"</b></h1>";
        sec.innerHTML = nw;
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
        else{
           sec.innerHTML = "DESTROYING";
           sleep(1000);    
           vibrate(2000);
           sec.innerHTML = "Destroying Web page"; 
           sleep(1000);
           vibrate(500);  
           document.body.innerHTML = "<h1>Empty as space</h1>";
        }};



function vis(){
document.getElementById("second").remove();
}

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {

  loader.classList.add("disppear");

}

