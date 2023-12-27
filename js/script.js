"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const buttonCloseModal = document.querySelector(".button-close-modal");
const buttonsOpenModal = document.querySelectorAll(".button-open-modal");

const buttonsOpenSchedule = document.querySelectorAll(".button-open-schedule");
const buttonCloseSchedule = document.querySelector(".button-close-schedule");

/////////////////
// Booking Modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttonsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

buttonCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////////////////////////
// Testimonial Slider
const testimonialSlider = function () {
  const slides = document.querySelectorAll(".testimonial-slide");
  const sliderBtnLeft = document.querySelector(".slider-btn-left");
  const sliderBtnRight = document.querySelector(".slider-btn-right");

  let currentSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((item, index) => {
      item.style.transform = `translateX(${100 * (index - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  };

  const previousSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  };

  const initializer = function () {
    goToSlide(0);
  };
  initializer();

  sliderBtnRight.addEventListener("click", nextSlide);
  sliderBtnLeft.addEventListener("click", previousSlide);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowLeft" && previousSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
testimonialSlider();

///////////////////////////////////////////////////////////
// Mobile Navigation
const body = document.querySelector("body");
const buttonMobileNav = document.querySelector(".btn-mobile-nav");
const navLinks = document.querySelector(".main-nav-list");
const header = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");

const toggleMobileNav = function (e) {
  e.preventDefault();
  mainNav.classList.toggle("active");
  navLinks.classList.toggle("active");
  header.classList.toggle("nav-open");
  body.classList.toggle("fixed");
};

const closeMobileNav = function () {
  navLinks.classList.remove("active");
  mainNav.classList.remove("active");
  header.classList.toggle("nav-open");
  body.classList.remove("fixed");
};

buttonMobileNav.addEventListener("click", toggleMobileNav);

navLinks.addEventListener("click", closeMobileNav);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navLinks.classList.contains("active")) {
    closeMobileNav();
  }
});

///////////////////////////////////////////////////////////
// Shopping Cart Functionality
let itemName = document.querySelector(".meal-name");
let itemPrice = document.querySelector(".price");

let cart = [];

// Function to add an item to the cart
function addToCart() {
  // Create an object to represent the item
  let item = {
    name: itemName,
    price: itemPrice,
  };

  // Add the item to the cart array
  itemName.cart.push(item);
}

// Example usage:
addToCart();

// Display the contents of the cart
console.log(cart);