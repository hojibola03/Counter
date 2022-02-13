let count = 0;
let btns = document.querySelectorAll(".btn");
let value = document.querySelector("#value");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log(styles);
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "gold";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
