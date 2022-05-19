var timeDisplay = document.getElementById("time");
function refreshTime() {
  var dateString = new Date().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);


var rando = document.getElementById("place");
var arr = ["Noamundi", "Kolkata","India", "Jharkhand", "West Bengal", "Ranaghat", "Ranchi", "Chaibasa", "Home", "School", "Tution", "Hotel", "Bed"];
function random() {
    var rand = arr[Math.floor(Math.random() * arr.length)];
    rando.innerHTML = rand;
}
random()



