var rando = document.getElementById("place");
var arr = ["Noamundi", "Kolkata","India", "Jharkhand", "West Bengal", "Ranaghat", "Ranchi", "Chaibasa", "Home", "School", "Tution", "Hotel", "Bed"];
function random() {
    var rand = arr[Math.floor(Math.random() * arr.length)];
    rando.innerHTML = rand;
}
random()



