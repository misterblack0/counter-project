const buttonAdd = document.querySelector('.add');
const buttonLower = document.querySelector('.lower');
const counter = document.querySelector('#counter');

const counterLower = document.querySelector('#counterLower');
const counterAdd = document.querySelector('#counterAdd');

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
  counterLower.textContent = count - 1;
counterAdd.textContent = count + 1;
});

buttonLower.addEventListener('click', function () {
  count--;
  counterColor();
  counterLower.textContent = count - 1;
counterAdd.textContent = count + 1;
});
