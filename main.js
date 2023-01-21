const container1_texts = document.getElementsByClassName("container1_text");
const body = document.querySelector("body");

function sleep(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(ms);
    }, ms)
  );
}

function styles(index, color) {
  container1_texts[index].addEventListener("mouseover", function () {
    container1_texts[index].style.color = color;
    container1_texts[index].style.fontSize = "42px";
    body.style.backgroundColor = color;
  });
  container1_texts[index].addEventListener("mouseout", function () {
    setTimeout(() => {
      container1_texts[index].style.color = "white";
      container1_texts[index].style.fontSize = "40px";
      body.style.backgroundColor = "black";
    }, 1000);
  });
}

styles(0, "#D5E9DC");
styles(1, "#A87E85");
styles(2, "#03C03C");
styles(3, "#D3BEC2");
styles(5, "#DF9FB7");
styles(6, "#E5D2E9");
styles(7, "#F8A3CC");
styles(8, "#FFE4E1");
styles(10, "#95BAF7");
styles(11, "#67001A");
styles(12, "#2C4E31");
styles(13, "#666666");
styles(15, "#133337");
styles(16, "#E6A91D");
styles(18, "#EEEE44");
styles(19, "#194d33");
styles(20, "#28cf7c");
styles(21, "#3a2496");
styles(22, "#492dc0");

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.05,
  }
);

hiddenElements.forEach((el) => observer.observe(el));

// Get the image element
var img = document.getElementById("cursor");

document.onmousemove = function (event) {
  var x = event.pageX;
  var y = event.pageY;
  img.style.left = x - img.width / 2 + "px";
  img.style.top = y - img.height / 2 + "px";
};

const anchor = document.getElementById("follow_container");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  const eyes = document.querySelectorAll("#arrow");
  eyes[0].style.transform = `rotate(${90 + angleDeg}deg)`;
  eyes[1].style.transform = `rotate(${-120 - angleDeg}deg)`;
  eyes[2].style.transform = `rotate(${0 + angleDeg}deg)`;
  eyes[3].style.transform = `rotate(${-45 - angleDeg}deg)`;
});

const ball = document.querySelector("#ball");
var vw90 = window.innerWidth * 0.8;
var vh90 = window.innerHeight * 0.8;
var colorList = [
  "#D5E9DC",
  "#A87E85",
  "#03C03C",
  "#D3BEC2",
  "#DF9FB7",
  "#E5D2E9",
  "#F8A3CC",
  "#FFE4E1",
  "#95BAF7",
  "#67001A",
  "#2C4E31",
  "#666666",
  "#133337",
  "#E6A91D",
  "#EEEE44",
  "#194d33",
  "#28cf7c",
  "#3a2496",
  "#492dc0",
];
const container4 = document.querySelector(".container4");
const container4_wave = document.querySelector(".container4_wave");
const container4_wave_shape_fill = container4_wave.querySelector(".shape-fill");
ball.addEventListener("mouseover", (e) => {
  var color = Math.floor(Math.random() * colorList.length);
  container4.style.backgroundColor = colorList[color];
  container4_wave_shape_fill.style.fill = colorList[color];
  var pxx = Math.floor(Math.random() * vw90) + window.innerWidth * 0.1;
  var pxy = Math.floor(Math.random() * vh90) + window.innerHeight * 0.1;
  ball.style.top = pxy + "px";
  ball.style.left = `${pxx}px`;
  console.log(pxx, pxy);
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

const rules = document.querySelector(".rules");
const rules_describe = document.querySelector(".rules_container");
rules.addEventListener("mouseover", () => {
  rules_describe.style.display = "block";
});
rules.addEventListener("mouseout", () => {
  rules_describe.style.display = "none";
});

// const
// if (window.scrollY > 0) {

// }