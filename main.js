const container1_texts = document.getElementsByClassName("container1_text");
const body = document.querySelector("body");

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
  "#5d8aa8",
  "#f0f8ff",
  "#e32636",
  "#efdecd",
  "#e52b50",
  "#ffbf00",
  "#ff033e",
  "#9966cc",
  "#a4c639",
  "#f2f3f4",
  "#cd9575",
  "#915c83",
  "#faebd7",
  "#008000",
  "#8db600",
  "#fbceb1",
  "#00ffff",
  "#7fffd4",
  "#4b5320",
  "#e9d66b",
  "#b2beb5",
  "#87a96b",
  "#ff9966",
  "#a52a2a",
  "#fdee00",
  "#6e7f80",
  "#ff2052",
  "#007fff",
  "#f0ffff",
  "#89cff0",
];
var imageList = [
  "https://wallpapertag.com/wallpaper/full/7/8/0/790516-jojo-bizarre-adventure-hd-wallpaper-1920x1080-large-resolution.jpg",
  "https://getwallpapers.com/wallpaper/full/7/b/8/666341.jpg",
  "https://getwallpapers.com/wallpaper/full/c/8/0/7770.jpg",
  "https://getwallpapers.com/wallpaper/full/7/b/8/1124567-widescreen-super-cool-desktop-backgrounds-1920x1080.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/08/Super-cool-picture-backgrounds.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/05/Really-Cool-Wallpapers-HD.jpg",
  "http://cdn.wallpapersafari.com/70/38/GXe2JI.jpg",
  "https://cdn.wallpapersafari.com/58/31/lJ603R.jpg",
  "http://avante.biz/wp-content/uploads/Wallpapers-1920x1080-Full-HD/Wallpapers-1920x1080-Full-HD-035.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-Free-Full-HD-Photos.jpg",
  "https://getwallpapers.com/wallpaper/full/e/4/1/1284973-black-hole-wallpaper-hd-1920x1080-xiaomi.jpg",
  "https://wallpapercave.com/wp/gYzIBWC.jpg",
  "https://wallpapercave.com/wp/2dYMWNr.jpg",
  "https://wallpapertag.com/wallpaper/full/2/e/9/318247-black-hole-wallpaper-1920x1080-for-ipad.jpg",
  "https://getwallpapers.com/wallpaper/full/e/c/7/1284974-cool-black-hole-wallpaper-hd-1920x1080-pictures.jpg",
  "http://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-Abstract-Background-Wallpaper.jpg",
  "https://getwallpapers.com/wallpaper/full/2/c/8/90229.jpg",
  "https://wallpapercave.com/wp/wp2919828.jpg",
  "https://images6.alphacoders.com/331/331091.jpg",
  "https://wallpapercave.com/wp/wp3262696.jpg",
  "https://images.hdqwalls.com/download/1/branches-tree-night-blue-cool-weather-ww.jpg",
  "https://wallpapertag.com/wallpaper/full/0/8/6/264654-top-abstract-wallpaper-1920x1080-1920x1080-for-phone.jpg",
  "http://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Images-HD-1920x1080.jpg",
];

function styles_for_container1_texts(index) {
  document.addEventListener("mousemove", () => {
    var color = Math.floor(Math.random() * colorList.length);
    container1_texts[index].addEventListener("mouseover", function () {
      container1_texts[index].style.color = colorList[color];
      container1_texts[index].style.fontSize = "42px";
      body.style.backgroundColor = colorList[color];
    });
  });
  container1_texts[index].addEventListener("mouseout", function () {
    setTimeout(() => {
      container1_texts[index].style.color = "white";
      container1_texts[index].style.fontSize = "40px";
      body.style.backgroundColor = "black";
    }, 1000);
  });
}

for (var i = 0; i <= 22; i++) {
  styles_for_container1_texts(i);
}

// Hidden elements animation on apear
const hiddenElements = document.querySelectorAll(".hidden"); // get all hiden elements

// Script to show hidden element on screen when its available
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

// Observe hidden elements
hiddenElements.forEach((el) => observer.observe(el));
// End of hidden elements script

// Get the image element
var cursor = document.getElementById("cursor");

const anchor = document.getElementById("follow_container");
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

const top_button = document.querySelector(".top_button");
top_button.addEventListener("click", function () {
  window.scroll(0, -1000);
});
function check_scroll_for_top_button() {
  if (window.scrollY > 200) {
    top_button.style.display = "grid";
  } else {
    top_button.style.display = "none";
  }
}
document.addEventListener("wheel", function (event) {
  check_scroll_for_top_button();
});
document.onmousemove = function (event) {
  check_scroll_for_top_button();
  var x = event.pageX;
  var y = event.pageY;
  cursor.style.left = x - cursor.width / 2 + "px";
  cursor.style.top = y - cursor.height / 2 + "px";
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  const arrow = document.querySelector("#arrow");
  arrow.style.transform = `rotate(${90 + angleDeg}deg)`;
};

const ball = document.querySelector("#ball");
ball.style.backgroundColor = "blue";
const new_ball = document.createElement("img");
var vw70 = window.innerWidth * 0.7;
var vh70 = window.innerHeight * 0.7;

function ball_game(element) {
  var color = Math.floor(Math.random() * colorList.length);
  container4.style.backgroundColor = colorList[color];
  container4_wave_shape_fill.style.fill = colorList[color];
  container5_wave_shape_fill.style.fill = colorList[color];
  var pxx = Math.floor(Math.random() * vw70) + window.innerWidth * 0.1;
  var pxy = Math.floor(Math.random() * vh70) + window.innerHeight * 0.1;
  element.style.top = pxy + "px";
  element.style.left = `${pxx}px`;
}

const container4 = document.querySelector(".container4");
const container4_wave = document.querySelector(".container4_wave");
const container5_wave = document.querySelector(".container5_wave");
const container5_wave_shape_fill = container5_wave.querySelector(".shape-fill");
const container4_wave_shape_fill = container4_wave.querySelector(".shape-fill");
if (ball !== null) {
  ball.addEventListener("mouseover", (e) => {
    ball_game(ball);
  });
}

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

// Toggle for jojo mode
function toggle() {
  // Get all jojos
  const dio = document.querySelector(".container1_dio");
  const pucci = document.querySelector(".container2_pucci");
  const jovana = document.querySelector(".container3_jovana");
  const jotaro = document.querySelector(".container4_jotaro");
  const jolyne = document.querySelector(".container4_jolyne");

  // Get checkbox
  var checkBox = document.getElementById("dio");
  if (checkBox.checked === true) {
    // change cursor to jojo and add jojos to screen
    cursor.src = "dio.png";
    dio.style.display = "block";
    dio.setAttribute("draggable", "false");
    pucci.style.display = "block";
    pucci.setAttribute("draggable", "false");
    jovana.style.display = "block";
    jovana.setAttribute("draggable", "false");
    jotaro.style.display = "block";
    jotaro.setAttribute("draggable", "false");
    jolyne.style.display = "block";
    jolyne.setAttribute("draggable", "false");
    ball.id = "left1000vw"; // Move original ball from ball game with 1000vw
    // Check ball with it new id (left1000vw)
    const ball_after_check = document.querySelector("#left1000vw");
    // Check if it had top and left style
    const ball_after_check_styles = getComputedStyle(ball_after_check);
    if (
      ball_after_check_styles.getPropertyValue("top") &&
      ball_after_check_styles.getPropertyValue("left")
    ) {
      // delete top and left
      ball_after_check.style.top = "";
      ball_after_check.style.left = "";
    }
    // Create new ball when jojo mode is activated
    new_ball.src = "dio.png";
    new_ball.alt = "dio";
    new_ball.id = "ball";
    new_ball.style.backgroundColor = "transparent";
    container4.appendChild(new_ball);
    // Add ball activity for it
    new_ball.addEventListener("mouseover", (e) => {
      ball_game(new_ball);
    });
  } else {
    // Bring cursor to original and hide all jojos and remove dio ball at the end
    cursor.src = "blue_dot.png";
    dio.style.display = "none";
    pucci.style.display = "none";
    jovana.style.display = "none";
    jotaro.style.display = "none";
    jolyne.style.display = "none";
    ball.id = "ball";
    new_ball.remove();
  }
}

// Check if invisible mode is active
var activator_for_container4_check = false;

function container4_check() {
  activator_for_container4_check = !activator_for_container4_check;
  if (activator_for_container4_check) {
    ball.style.opacity = "0.05";
    ball.style.backgroundColor = "rgba(30,144,255, 0.7)";

    if (new_ball !== null) {
      new_ball.style.opacity = "0.05";
    }
  } else {
    ball.style.opacity = "1";
    ball.style.backgroundColor = "blue";

    if (new_ball !== null) {
      new_ball.style.opacity = "1";
    }
  }
}

const container5 = document.querySelector(".container5");
var container5_random_bg = Math.floor(Math.random() * imageList.length);
container5.style.backgroundImage = `url(${imageList[container5_random_bg]})`;
container5.style.backgroundPosition = "center";
container5.style.backgroundSize = "cover";
