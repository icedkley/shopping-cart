let count = document.querySelector(".count");
let addBtnArr = document.querySelectorAll(".add-to-cart-btn");
let itemCount = 0;
addBtnArr.forEach((button) => {
  button.addEventListener("click", setCount);
});

function setCount() {
  itemCount++;
  count.innerHTML = itemCount;
}
