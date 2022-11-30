//Lists effect
let listsA = document.querySelectorAll(".lists .container ul li a");

for (let i = 0; i < listsA.length; i++) {
  let button = listsA[i];
  button.addEventListener("click", () => {
    button.style.setProperty("--width-none", "100%");
    return;
  });
};

let listsB = document.querySelectorAll(".products .container .head .head-lists ul li");

for (let i = 0; i < listsB.length; i++) {
  let button = listsB[i];
  button.addEventListener("click", () => {
    button.style.setProperty("--width-none", "100%");
    button.style.color = "#D10024";
  });
};
//Lists effect

//الشغل التئيل بئى

let myCart = document.querySelector(".cart");
let myCartIcon = document.querySelector(".header-cart");
let myClose = document.querySelector(".close");
let myAddButtons = document.querySelectorAll(".add-cart button");
let counter = 0;


//Remove
updateCartTotal()
let removeButtons = document.querySelectorAll(".remove");
for (let i = 0; i < removeButtons.length; i++) {
  let button = removeButtons[i];
  button.addEventListener("click", removeItem);
};
function removeItem(e) {
  if (counter < 0) {
    counter = 0;
  };
  counter-= 1;
  countingUpdate()
  let button = e.target;
  button.parentElement.parentElement.remove();
  updateCartTotal()
};
//Remove



// Open
myCartIcon.addEventListener("click", openCart);


//Close
myClose.addEventListener("click", closeCart);


//Add
for (let i = 0; i < myAddButtons.length; i++) {
  let button = myAddButtons[i];
  button.addEventListener("click", addToCartClicked);
};

let quantityInputs = document.querySelectorAll(".details-bottom input");
for (let i = 0; i < quantityInputs.length; i++) {
  input = quantityInputs[i];
  input.addEventListener("change", updateCartTotal)
};


function openCart() {
  myCart.style.display = "block";
};

function closeCart() {
  myCart.style.display = "none";
};


function countingUpdate() {
  document.querySelector(".cart-noti").innerText = counter;
  document.querySelector(".selected span").innerText = counter;
}

// function addToCart(e) {
//   updateCartTotal()
//   counter++;
//   let button = e.target;
//   let productBox = button.parentElement.parentElement;
//   let imgSrc = productBox.querySelector(".img img").src;
//   let title = productBox.querySelector(".details h4").innerText;
//   let price = productBox.querySelector(".price .current").innerText;
//   let products = document.querySelector(".cart-products");
//   let titles = document.querySelectorAll(".cart-box h4");
//   let quantityInput = document.querySelectorAll(".quantity");
//   for (let i = 0; i < titles.length; i++) {
//     if (titles[i].innerText === title) {
//       quantityInput[i].value++;
//       return;
//     };
//   };
//   let newBox = document.createElement("div");
//   newBox.classList.add("cart-box");
//   let newBoxContent = `
//     <div class="img">
//       <i class="fa-sharp fa-solid fa-xmark remove"></i>
//       <img src="${imgSrc}" alt="">
//     </div>
//     <div class="cart-details">
//       <h4>${title}</h4>
//       <div class="details-bottom">
//         <input type="number" min="1" value="1" class="quantity">
//         <span class="cart-box-price">${price}</span>
//       </div>
//     </div>
//   `
//   newBox.innerHTML = newBoxContent;
//   products.prepend(newBox)
//   newBox.querySelector(".remove").addEventListener("click", removeItem);
//   newBox.querySelector(".details-bottom input").addEventListener("change", updateCartTotal);
//   counter++;
//   updateCartTotal()
// };

function addToCartClicked(event) {
  let button = event.target;
  let productBox = button.parentElement.parentElement;
  let title = productBox.querySelector(".details h4").innerText;
  let price = productBox.querySelector(".price .current").innerText;
  let imgSrc = productBox.querySelector("img").src;
  addItemToCart(title, price, imgSrc);
  updateCartTotal();
};


function addItemToCart(title, price, imgSrc) {
  let products = document.querySelector(".cart-products");
  let titles = document.querySelectorAll(".cart-box h4");
  let quantityInput = document.querySelectorAll(".quantity");
  console.log(quantityInput)
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].innerText === title) {
      quantityInput[i].value++;
      return;
    };
  };
  let newBox = document.createElement("div");
  newBox.classList.add("cart-box");
  let newBoxContent = `
    <div class="img">
      <i class="fa-sharp fa-solid fa-xmark remove"></i>
      <img src="${imgSrc}" alt="">
    </div>
    <div class="cart-details">
      <h4>${title}</h4>
      <div class="details-bottom">
        <input type="number" min="1" value="1" class="quantity">
        <span class="cart-box-price">${price}</span>
      </div>
    </div>
  `
  newBox.innerHTML = newBoxContent;
  products.prepend(newBox)
  newBox.querySelector(".remove").addEventListener("click", removeItem);
  newBox.querySelector(".details-bottom input").addEventListener("change", updateCartTotal);
  counter++;
  countingUpdate()
};

function updateCartTotal() {
  let boxes = document.querySelectorAll(".cart-box");
  let total = 0;
  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    let priceElement = box.querySelector(".details-bottom span").innerText.replace("$", "");
    let price = parseFloat(priceElement)
    let quantity = box.querySelector(".quantity").value;
    total = total + (quantity * price);
  };
  let totalNum = document.querySelector(".total-number");
  totalNum.innerText = "$" + total;
};

//الشغل التئيل بئى


//الشغل التئيل التاني بئى

//sliders

let productsArrowRight = document.querySelector(".arrows .right");
let productsArrowLeft = document.querySelector(".arrows .left");
let newProductsBox = document.querySelectorAll(".products .box")
let sellingArrowRight = document.querySelector(".selling-arrows .right");
let sellingArrowLeft = document.querySelector(".selling-arrows .left");
let sellingProductsBoxParent = document.querySelector(".top-selling-products");
// let sellingProductsBox = document.querySelector(".top-selling-products .box");
let current = 1;
let sellingCurrent = 1;

productsArrowRight.addEventListener("click", () => {
  current--;
  for (let i = 0; i < newProductsBox.length; i++) {
    let box = newProductsBox[i];
    box.style.transform = `translateX(${current * 285}px)`;
  };
  if (current < newProductsBox.length) {
    current = 0;
  };
});
productsArrowLeft.addEventListener("click", () => {
  current++;
  for (let i = 0; i < newProductsBox.length; i++) {
    let box = newProductsBox[i];
    box.style.transform = `translateX(${current * 285}px)`;
  };
  if (current < newProductsBox.length) {
    current = 0;
  };
});


// sellingArrowRight.addEventListener("click", () => {
//   sellingCurrent--;
//   sellingProductsBoxParent.style.transform = `translateX(${sellingCurrent * 50}px)`;
// });

// sellingArrowLeft.addEventListener("click", () => {
// });



//sliders

//الشغل التئيل التاني بئى
