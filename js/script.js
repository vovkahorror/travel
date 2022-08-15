"use strict";

// Burger-menu

function burgerOn() {
  burgerMenu.classList.add("burger-menu-active");
  burgerBlackoutOn();
}

function burgerOff() {
  burgerMenu.classList.remove("burger-menu-active");
  burgerBlackoutOff();
}

function burgerBlackoutOn() {
  burgerBlackout.style.setProperty("display", "block");

  function blackoutAnimation() {
    burgerBlackout.classList.add("blackout-burger-active");
  }

  setTimeout(blackoutAnimation, 0);
}

function burgerBlackoutOff() {
  burgerBlackout.classList.remove("blackout-burger-active");

  function blackoutAnimation() {
    burgerBlackout.style.setProperty("display", "none");
  }

  setTimeout(blackoutAnimation, 300);
}

const burgerMenu = document.querySelector(".burger-menu");
const burgerBlackout = document.querySelector(".blackout-burger");
const burger = document.getElementById("burger");
const burgerCross = document.getElementById("burgerCross");
const burgerLinks = document.querySelectorAll(".burger-menu__link");

burger.addEventListener("click", burgerOn);
burgerCross.addEventListener("click", burgerOff);

for (let item of burgerLinks) {
  item.addEventListener("click", burgerOff);
}

window.addEventListener("click", (outsideClick) => {
  const target = outsideClick.target;
  if (!target.closest(".burger-menu") && !target.closest("#burger")) {
    burgerOff();
  }
});

// SLider

function scrollLeft() {
  countArrows--;
  if (countArrows < -1) countArrows = -1;
  arrowsActive(countArrows);
  countDots--;
  if (countDots < 0) countDots = 0;
  dotsActive(countDots);

  if (document.documentElement.clientWidth > 767) {
    sliderContainer.style.transform = `translateX(${slide.offsetWidth + 60}px)`;
  } else {
    sliderContainer.style.transform = `translateX(${-(
      slide.offsetWidth * countArrows
    )}px)`;
  }
}

function scrollCenter() {
  countArrows = 0;
  arrowsActive(countArrows);
  countDots = 1;
  dotsActive(countDots);
  sliderContainer.style.transform = "";
}

function scrollRight() {
  countArrows++;
  if (countArrows > 1) countArrows = 1;
  arrowsActive(countArrows);
  countDots++;
  if (countDots > 2) countDots = 2;
  dotsActive(countDots);

  if (document.documentElement.clientWidth > 767) {
    sliderContainer.style.transform = `translateX(${-(
      slide.offsetWidth + 60
    )}px)`;
  } else {
    sliderContainer.style.transform = `translateX(${-(
      slide.offsetWidth * countArrows
    )}px)`;
  }
}

function dotsActive(count) {
  for (let dot of dots) {
    dot.classList.remove("destinations__dot-active");
  }
  dots[count].classList.add("destinations__dot-active");
}

function arrowsActive(count) {
  for (let arrow of arrows) {
    arrow.classList.remove("destinations__arrows-image-last");
  }
  if (count === -1) arrows[0].classList.add("destinations__arrows-image-last");
  if (count === 1) arrows[1].classList.add("destinations__arrows-image-last");
}

const sliderContainer = document.querySelector(".destinations__list");
const slide = document.querySelector(".destinations__item");
const slides = document.querySelectorAll(".destinations__item");
const arrows = document.querySelectorAll(".destinations__arrows-image");
const dots = document.querySelectorAll(".destinations__dot");
let countArrows = 0;
let countDots = 1;

if (document.documentElement.clientWidth > 767) {
  slides[0].addEventListener("click", scrollLeft);
  slides[1].addEventListener("click", scrollCenter);
  slides[2].addEventListener("click", scrollRight);
}

dots[0].addEventListener("click", () => {
  countArrows = -1;
  countDots = 0;
  scrollLeft();
});

dots[1].addEventListener("click", scrollCenter);

dots[2].addEventListener("click", () => {
  countArrows = 1;
  countDots = 2;
  scrollRight();
});

arrows[0].addEventListener("click", scrollLeft);
arrows[1].addEventListener("click", scrollRight);

// Pop-up

function popUpOn() {
  popUp.classList.add("pop-up-active");
  popUpBlackoutOn();
}

function popUpOff() {
  popUp.classList.remove("pop-up-active");
  popUpBlackoutOff();
}

function popUpBlackoutOn() {
  popUpBlackout.style.setProperty("display", "block");

  function blackoutAnimation() {
    popUpBlackout.classList.add("blackout-pop-up-active");
  }

  setTimeout(blackoutAnimation, 0);
}

function popUpBlackoutOff() {
  popUpBlackout.classList.remove("blackout-pop-up-active");

  function blackoutAnimation() {
    popUpBlackout.style.setProperty("display", "none");
  }

  setTimeout(blackoutAnimation, 300);
}

function popUpChange() {
  if (countClicks % 2 === 0) {
    for (let item of popUpNotRegistred) {
      item.classList.add("pop-up__not-registered-deactivate");

      function itemAnimation() {
        item.style.setProperty("display", "none");
        popUpHeading.textContent = "Create account";
        popUpButton.textContent = "Sign Up";
        popUpOfferQuestion.textContent = "Already have an account?";
        popUpOffer.textContent = "Log in";
      }

      setTimeout(itemAnimation, 300);
    }
  } else {
    for (let item of popUpNotRegistred) {
      item.style.setProperty("display", "block");

      function itemAnimation() {
        item.classList.remove("pop-up__not-registered-deactivate");
      }

      setTimeout(itemAnimation, 0);
    }

    popUpHeading.textContent = "Log in to your account";
    popUpButton.textContent = "Sign In";
    popUpOfferQuestion.textContent = "Don’t have an account?";
    popUpOffer.textContent = "Register";
  }

  countClicks++;
}

const popUp = document.querySelector(".pop-up");
const loginButtons = document.querySelectorAll(".login");
const popUpBlackout = document.querySelector(".blackout-pop-up");
const popUpInput = document.querySelectorAll(".pop-up__form-input");
const popUpButton = document.querySelector(".pop-up__form-button");
const popUpNotRegistred = document.querySelectorAll(".pop-up__not-registered");
const popUpOffer = document.querySelector(".pop-up__offer-link");
const popUpHeading = document.querySelector(".pop-up__heading");
const popUpOfferQuestion = document.querySelector(".pop-up__offer-question");
let countClicks = 0;

for (let item of loginButtons) {
  item.addEventListener("click", popUpOn);
}

window.addEventListener("click", (outsideClick) => {
  const target = outsideClick.target;
  if (!target.closest(".login") && !target.closest(".pop-up")) {
    popUpOff();
  }
});

popUpButton.addEventListener("click", () => {
  alert(`E-mail: ${popUpInput[0].value}\nPassword: ${popUpInput[1].value}`);
});

popUpOffer.addEventListener("click", popUpChange);
