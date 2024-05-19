let checkoutBtn = document.querySelector(".checkout-btn");
let count = document.querySelector(".count");
let addBtnArr = document.querySelectorAll(".add-to-cart-btn");
let itemCount = 0;
let cartItemArr = [];
let itemList = document.querySelector(".item-list");
let priceList = document.querySelector(".price-list");
let modal = document.querySelector(".modal");

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

    modal.style.display = "flex";
  });
});

checkoutBtn.addEventListener("click", displayItems);

function setCount() {
  itemCount++;
  count.innerHTML = itemCount;
}

function displayItems() {
  console.log("you cart is: " + cartItemArr);
}
