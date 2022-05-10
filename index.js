var img = document.querySelector("#image");
var date = new Date();
var hour = date.getHours();

function load() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm = "AM"

    if(hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour -12;
        ampm = "PM"
    }

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    const currentTime = `Right now it's ${hour}:${minute}:${second} ${ampm}`
    
    document.querySelector(".time").innerText = currentTime;
    document.querySelector(".time").textContent = currentTime;
    
    setTimeout(load, 1000)
}


function verifyTime() {
    var d = new Date();
    var ho = d.toLocaleTimeString().split(":")[0];
    if (ho >= 0 && hour < 12) {
        img.src = "./img/morning.jpg";
        document.body.style.backgroundColor = "#bbe8b5";
        const p = document.createElement("p");
        timeDiv.appendChild(p);
        p.after('Good Morning!');
    } else if (ho >= 12 && ho < 19) {
        img.src = "./img/afternoon.jpg";
        document.body.style.backgroundColor = "#cab076";
        const p = document.createElement("p");
        timeDiv.appendChild(p);
        p.after('Good Afternoon!');
    } else if (ho >= 19 && ho < 23 ) {
        img.src = "./img/evening.jpg";
        document.body.style.backgroundColor = "#112d3d";
        const p = document.createElement("p");
        timeDiv.appendChild(p);
        p.after('Good Evening!');
    }

}

function loader() {
    load();
    verifyTime();
}