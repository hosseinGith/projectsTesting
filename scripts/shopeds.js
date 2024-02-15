const dropDownBtn = document.querySelectorAll(".iconDropMenu");
console.log(dropDownBtn);
dropDownBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("active");
  });
});
