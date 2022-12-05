// Menu
let menuIcon = document.querySelector(".menu");
let menuList = document.querySelector(".menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
// Menu

// Cart
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");


cartIcon.addEventListener("click", () => {
  cart.style.cssText = "visibility: visible; opacity: 1; top: 100%;";
});

let cartCloseIcon = document.querySelector(".close");

cartCloseIcon.addEventListener("click", () => {
  cart.style.cssText = "visibility: hidden; opacity: 0; top: -100%;";
});

let removeIcons = document.querySelectorAll(".remove-icon i");
let counter = 0;

for (let i = 0; i < removeIcons.length; i++) {
  let button = removeIcons[i];
  button.addEventListener("click", removeItem);
};

function removeItem(event) {
  counter--;
  let button = event.target;
  button.parentElement.parentElement.remove();
  updateCounter();
  updateCartTotal();
};

let quantityInputs = document.querySelectorAll(".cart-box input");

for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", updateCartTotal);
}

let addButtons = document.querySelectorAll(".add-to-cart button");

for (let i = 0; i < addButtons.length; i++) {
  let button = addButtons[i];
  button.addEventListener("click", addToCartClicked);
};

function addToCartClicked(event) {
  counter++;
  let button = event.target;
  let product = button.parentElement.parentElement;
  let imgSrc = product.querySelector("img").src;
  let title = product.querySelector("h4").innerText;
  let price = product.querySelector(".new-price").innerText;
  addToCart(imgSrc, title, price);
  updateCartTotal();
};

function addToCart(imgSrc, title, price) {
  let cartBoxImg = document.querySelectorAll(".cart-box img");
  let quantityInputs = document.querySelectorAll(".quantity");
  for (let i = 0; i < cartBoxImg.length; i++) {
    if (cartBoxImg[i].src === imgSrc) {
      quantityInputs[i].value++;
      counter--;
      return;
    };
  };
  let newBox = document.createElement("div");
  let cartProducts = document.querySelector(".cart-products");
  newBox.classList.add("cart-box");
  cartProducts.appendChild(newBox);
  let newBoxContent = `
  <div class="remove-icon">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <div class="img">
    <img src="${imgSrc}" alt="">
  </div>
  <div class="details">
    <h4>${title}</h4>
    <input type="number" class="quantity" value="1" min="1">
    <span class="cart-price">${price}</span>
  </div>`
  newBox.innerHTML = newBoxContent;
  newBox.querySelector(".remove-icon i").addEventListener("click", removeItem);
  newBox.querySelector("input").addEventListener("change", updateCartTotal);
  updateCounter();
};

let cartQuantity = document.querySelector(".cart-icon span");
let selectedItems = document.querySelector(".selected");

function updateCounter() {
  cartQuantity.innerText = counter;
  selectedItems.innerText = counter;
};

function updateCartTotal() {
  let total = 0;
  let boxes = document.querySelectorAll(".cart-box");
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    let priceElement = box.querySelector(".cart-price").innerHTML.replace("$", "");
    let price = parseFloat(priceElement);
    let quantity = box.querySelector("input").value;
    total = total + (price * quantity);
  };
  document.querySelector(".subtotal-number").innerText = "$" + total;
};
// Cart
