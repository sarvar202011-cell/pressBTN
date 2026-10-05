let count = 0;

const countElement = document.querySelector(".count");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");

function updateCount() {
  countElement.textContent = count;
  console.log(count);
}

function addCount() {
  count += 1;
  updateCount();
}

function minusCount() {
  if (count === 0) {
    return;
  }

  count -= 1;
  updateCount();
}

btnPlus.addEventListener("click", addCount);
btnMinus.addEventListener("click", minusCount);

updateCount();
