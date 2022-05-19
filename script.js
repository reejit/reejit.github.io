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
random()



