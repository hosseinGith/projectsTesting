const dropDownBtn = document.querySelectorAll(".iconDropMenu");
const plusMinusBtnsBtn = document.querySelectorAll(".plusMinusBtnsCont button");
const plusMinusBtnsInput = document.querySelector(".plusMinusBtnsCont input");

dropDownBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("active");
  });
});
plusMinusBtnsBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.id === "minus") {
      plusMinusBtnsInput.value = Number(plusMinusBtnsInput.value) - 1;
    } else if (item.id === "plus") {
      plusMinusBtnsInput.value = Number(plusMinusBtnsInput.value) + 1;
    }
    if (plusMinusBtnsInput.value > 99) plusMinusBtnsInput.value = 100;
  });
});
plusMinusBtnsInput.addEventListener("keyup", () => {
  if (plusMinusBtnsInput.value > 100) plusMinusBtnsInput.value = 100;
});
