var img = document.querySelector("#image");
var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();

function load(hour) {
    if (hour >= 0 && hour < 12) {
        img.src = "./img/morning.jpg";
        document.body.style.backgroundColor = "#bbe8b5";
    } else if (hour >= 12 && hour < 19) {
        img.src = "./img/afternoon.jpg";
        document.body.style.backgroundColor = "#cab076";
    } else if (hour >= 19 && hour < 23 ) {
        img.src = "./img/evening.jpg";
        document.body.style.backgroundColor = "#112d3d";
    }

    const phrase = `Right now it's ${hour}:${minute}`
    const a = document.createTextNode(phrase);
    var timeDiv = document.querySelector(".time");
    timeDiv.appendChild(a);
}
