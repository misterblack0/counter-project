const btnAdd = document.querySelector(".add");
const btnSubtract = document.querySelector(".subtract");
const counter = document.querySelector("#counter");
const counterLower = document.querySelector("#counterLower");
const counterHigher = document.querySelector("#counterHigher");

let count = 0;

modifier = () => {
  counterColor();
  counterLower.textContent = count - 1;
  counterHigher.textContent = count + 1;
};

counterColor = () => {
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "#fff";
  }
};

btnAdd.addEventListener("click", function () {
  count++;
  modifier();
});

btnSubtract.addEventListener("click", function () {
  count--;
  modifier();
});
