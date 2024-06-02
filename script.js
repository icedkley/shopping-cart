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
let closeBtn = document.querySelector(".close-modal-btn");
let itemPriceArr = [];
let discountBox = document.querySelector("#discount-checkbox");
let total = 0;
let checkoutModalBtn = document.querySelector(".checkout-modal-btn");

discountBox.addEventListener("click", checkDiscount);
checkoutModalBtn.addEventListener("click", displayCheckout);
checkoutBtn.addEventListener("click", displayItems);
cancelBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

function displayCheckout() {
  let contents = document.querySelector(".contents-wrapper");
  contents.innerHTML = `
  <p class="close-modal-btn">X</p>
  <div class='checkout-display'>
  <img src="./assets/check.png" alt="">
  <h2>Thank you!</h2>
  <h2>Transaction Complete</h2>
  </div>
  `;

  let closeBtn = document.querySelector(".close-modal-btn");
  closeBtn.addEventListener("click", closeModal);
}

function closeModal() {
  modal.style.display = "none";
  main.style.opacity = "100%";
}

function setCount() {
  itemCount++;
  count.innerHTML = itemCount;
}

function displayItems(e) {
  modal.style.display = "flex";
  main.style.opacity = "20%";

  getTotal();
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

    itemPriceArr.push(
      e.target.closest(".price-wrapper").firstElementChild.firstElementChild
        .textContent
    );

    let item = document.createElement("li");
    item.innerHTML =
      e.target.parentNode.parentNode.children[1].children[0].innerText;

    let price = document.createElement("li");
    price.textContent = ` $${
      e.target.closest(".price-wrapper").firstElementChild.firstElementChild
        .textContent
    }`;

    itemList.prepend(item);
    priceList.prepend(price);
  });
});

function getTotal() {
  itemPriceArr.forEach((price) => {
    total += parseInt(price);
  });

  let totalPrice = document.querySelector(".total-price");
  totalPrice.textContent = `$${total}`;
}

function checkDiscount() {
  if (discountBox.checked == true) {
    console.log("check");
    let totalPrice = document.querySelector(".total-price");
    totalPrice.textContent = `$${total - total * 0.05}`;
  } else {
    console.log("not checked");
    let totalPrice = document.querySelector(".total-price");

    totalPrice.textContent = `$${total}`;
  }
}

function checkCart() {
  if (cartItemArr == 0) {
    let checkoutBtn = document.querySelector(".checkout-btn");

    checkoutBtn.disabled = true;
  } else {
    checkoutBtn.disabled = false;
  }
}
