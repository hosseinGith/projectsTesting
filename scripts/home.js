const plusMinusBtnsBtn = document.querySelectorAll(".plusMinusBtnsCont button");
const plusMinusBtnsInput = document.querySelector(".plusMinusBtnsCont input");

plusMinusBtnsBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.id === "minus") {
      if (plusMinusBtnsInput.value <= 1) return;
      plusMinusBtnsInput.value = Number(plusMinusBtnsInput.value) - 1;
    } else if (item.id === "plus") {
      plusMinusBtnsInput.value = Number(plusMinusBtnsInput.value) + 1;
    }
  });
});
