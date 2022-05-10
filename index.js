const img = document.querySelector("#image");
let date = new Date();
let hour = date.getHours();

function load() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
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

  const currentTime = `Right now it's ${hour}:${minute}:${second} ${ampm}`;

  document.querySelector(".time").innerText = currentTime;
  document.querySelector(".time").textContent = currentTime;

  setTimeout(load, 1000);
}

function verifyTime() {
  const d = new Date();
  const h = d.getHours();
  const timeDiv = document.querySelector(".greeting");
  if (h >= 0 && h < 12) {
    img.src = "./img/morning.jpg";
    document.body.style.backgroundColor = "#bbe8b5";
    const p = document.createElement("p");
    timeDiv.appendChild(p);
    p.after("Good Morning!");
  } else if (h >= 12 && h < 19) {
    img.src = "./img/afternoon.jpg";
    document.body.style.backgroundColor = "#cab076";
    const p = document.createElement("p");
    timeDiv.appendChild(p);
    p.after("Good Afternoon!");
  } else if (h >= 19 && h < 23) {
    img.src = "./img/evening.jpg";
    document.body.style.backgroundColor = "#112d3d";
    const p = document.createElement("p");
    timeDiv.appendChild(p);
    p.after("Good Evening!");
  }
}

load();
verifyTime();

