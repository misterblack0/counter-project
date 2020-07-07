const buttonAdd = document.querySelector('.btn-warning');
const buttonLower = document.querySelector('.btn-secondary');
const counter = document.querySelector('.counter');
let count = 0;

counterColor = () => {
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = 'green';
  } else if (count < 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = '#000';
  }
};

buttonAdd.addEventListener('click', function () {
  count++;
  counterColor();
});

buttonLower.addEventListener('click', function () {
  count--;
  counterColor();
});
