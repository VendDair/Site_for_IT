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


const hiddenElements = document.querySelectorAll(".hidden")

const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show")
    } else {
        entry.target.classList.remove("show")
    }
   })
}, {
  threshold: 0.05
})


hiddenElements.forEach((el) => observer.observe(el))