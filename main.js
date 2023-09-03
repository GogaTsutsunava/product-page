// Side Navigation
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// Image Changing
function changeImg(imageUrl) {
  let img = document.querySelector(".first-img");
  img.src = imageUrl;
}

// Dropdown Behavior
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");
const cartContainer = document.querySelector(".cart-div");

// Toggle the visibility of the dropdown content
dropdownBtn.addEventListener("click", function (event) {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

// Hide the dropdown content when clicking outside of it
document.addEventListener("click", function (event) {
  if (
    !dropdownBtn.contains(event.target) &&
    !dropdownContent.contains(event.target) &&
    !cartContainer.contains(event.target) &&
    cartContainer == event.target
  ) {
    dropdownContent.style.display = "none";
  }
});

const plus = document.querySelector(".number");

plus.innerHTML = `<img class="minus" src="./images/icon-minus.svg" alt="">
  <h5 class="value">0</h5>
  <img class="plus" src="./images/icon-plus.svg" alt="">`;

const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const valueElement = document.querySelector(".value");

let value = 0;

// Decrease the value when the minus button is clicked

minusButton.addEventListener("click", () => {
  if (value > 0) {
    value--;
    valueElement.textContent = value;
  }
});

plusButton.addEventListener("click", () => {
  value++;
  valueElement.textContent = value;
});

// Product Images
const product = [
  {
    Image: "./images/1.jpg",
    Image2: "./images/1.jpg",
    Image3: "./images/img2.jpg",
    Image4: "./images/img3.jpg",
    Image5: "./images/img4.jpg",
  },
];

const categorie = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

root.innerHTML = product.map((item, index) => {
  const { Image, Image2, Image3, Image4, Image5 } = item;
  return `
    <section class="section ">
      <div class="img-div">
        <img class="first-img" src="${Image}" alt="Error">
        <div class="small-img">
          <img onclick="changeImg('${Image2}')" src="${Image2}" alt="Error">
          <img onclick="changeImg('${Image3}')" src="${Image3}" alt="Error">
          <img onclick="changeImg('${Image4}')" src="${Image4}" alt="Error">
          <img onclick="changeImg('${Image5}')" src="${Image5}" alt="Error">
        </div>
      </div>
    </section>
  `;
});

const addToCartButton = document.querySelector(".add-cart");

addToCartButton.addEventListener("click", () => {
  const selectedItemIndex = 0; // Use the correct index here
  addtocart(selectedItemIndex, value); // Add the chosen quantity to the cart

  updateQuantityDisplay();
});
var cart2 = [];

function addtocart(index, quantity) {
  for (let i = 0; i < quantity; i++) {
    cart2.push({ ...product[index] }); // Assuming "product" is the array of items
  }
  displayCart();
}
function displayCart() {
  if (cart2.length == 0) {
    document.querySelector(
      ".cart-div"
    ).innerHTML = `<span class="empty">Your cart is empty</span>`;
  } else {
    document.querySelector(".cart-div").innerHTML = cart2
      .map((items) => {
        var { Image } = items;
        return `
        <div class="cart-item">
          <img class="cart-img" src="${Image}" alt="Error">
          <span class="limited">Fall Limited Edition Sneakers</span>
          
          <button style="background: none; border: none; outline: none;" onclick="removeFromCart('${Image}')"><svg class="svg"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></button>
        </div>
          <div class="add-cart22">
          <img class="icon"  />Checkout
        </div>
      `;
      })
      .join("");
  }
}
function removeFromCart(image) {
  const indexToRemove = cart2.findIndex((item) => item.Image === image); // Find the index of the item to remove
  if (indexToRemove !== -1) {
    cart2.splice(indexToRemove, 1); // Remove the item at the specified index
    displayCart();
    updateQuantityDisplay();
  }
}

const numberOfItems = document.querySelector(".quantity");

function updateQuantityDisplay() {
  const value2 = cart2.length;

  // Update the cart icon quantity

  numberOfItems.textContent = value2 === 0 ? "" : value2;

  // Update the quantity next to "Add to Cart" button
  numberOfItems.textContent = value2;
}

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
let currentIndex = 0;

// Function to update the carousel display
function updateCarousel() {
  const slideWidth = slides[currentIndex].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listener for the previous button
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});
