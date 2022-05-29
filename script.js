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

var visitCount = document.getElementById("count");
function coun(){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",'https://api.countapi.xyz/hit/reejit.github.io/visits?amount=1',false);
    Httpreq.send( null );
    var raw = Httpreq.responseText;
    var json_obj = JSON.parse(raw);
    var count = json_obj.value
    visitCount.innerHTML = count;
}

coun();


var quot = document.getElementById("quott")
var auth = document.getElementById("auth");
function quott(){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",'https://animechan.vercel.app/api/random',false);
    Httpreq.send( null );
    var raw = Httpreq.responseText;
    var json_obj = JSON.parse(raw);
    var quote = json_obj.quote;
    var author = json_obj.character;
    var animeo = json_obj.anime;
    var frm = '~ '+author+' from '+animeo;
    quot.innerHTML = quote;
    auth.innerHTML = frm;
}

quott();

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

timeLeft = 11;
function countdown() {
	timeLeft--;
	var sec = document.getElementById("seconds");
        var bod = document.getElementById("body");
        sec.innerHTML = String( timeLeft );
	if (timeLeft > 0) {
          setInterval(countdown, 1200);
        }
        else{          
           sec.innerHTML = "See you";
           sleep(800);
           sec.innerHTML = "Destroying Web page";
           sleep(1200); 
           document.body.innerHTML = "";
           bod.remove();
        }
};

