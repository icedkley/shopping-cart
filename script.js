let checkoutBtn = document.querySelector(".checkout-btn");
let count = document.querySelector(".count");
let addBtnArr = document.querySelectorAll(".add-to-cart-btn");
let itemCount = 0;
let cartItemArr = [];
let itemList = document.querySelector(".item-list");
let priceList = document.querySelector(".price-list");
let modal = document.querySelector(".modal");
let price = 99;
let cancelBtn = document.querySelector(".cancel-btn");
let main = document.querySelector(".main");

checkoutBtn.addEventListener("click", displayItems);
cancelBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
  main.style.opacity = "100%";
}

function setCount() {
  itemCount++;
  count.innerHTML = itemCount;
}

function displayItems() {
  modal.style.display = "flex";
  main.style.opacity = "20%";
}

addBtnArr.forEach((button) => {
  button.addEventListener("click", (e) => {
    cartItemArr.push(
      e.target.parentNode.parentNode.children[1].children[0].innerText
    );
    setCount();
    e.target.innerHTML = "added";
    e.target.style.backgroundColor = "green";
    e.target.disabled = true;

    let item = document.createElement("li");
    item.innerHTML =
      e.target.parentNode.parentNode.children[1].children[0].innerText;

    let price = document.createElement("li");
    price.innerHTML = "$99.9";

    itemList.prepend(item);
    priceList.prepend(price);
  });
});
