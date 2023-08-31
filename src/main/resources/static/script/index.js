document.querySelectorAll(".about__carousel-button").forEach((button) => {
  button.addEventListener("click", function () {
    let buttons = document.querySelectorAll(".about__carousel-button");

    buttons.forEach((btn) => {
      btn.classList.remove("about__carousel-button-selected");
      this.disabled = false;
    });

    this.classList.add("about__carousel-button-selected");
    this.disabled = true;
  });
});

const cards = document.querySelector(".about__pics");
function aboutButtons769_1440() {
  document.querySelectorAll(".about__carousel-button").forEach((radio) => {
    let translateValues = {};

    radio.addEventListener("click", function () {
      if (window.innerWidth > 1440) {
        translateValues = {
          first: 0,
          second: -450 - 25 + "px",
          third: -475 * 2 + "px",
        };
      } else {
        translateValues = {
          first: 0,
          second: "calc(-100vw / 3 + 10px)",
          third: "calc(-2 * 100vw / 3 + 10px)",
        };
      }
      const selectedId = this.id;
      const translateValue = translateValues[selectedId];
      cards.style.transform = `translateX(${translateValue})`;

    });
  });
}

const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");
const about_buttons = document.querySelectorAll(".about__carousel-button");


function aboutButtons768() {
  let sectionIndex = 0;
  cards.style.transform = "translateX(0)";
  about_buttons.forEach(function (indicator, index) {

    indicator.addEventListener("click", function () {
      sectionIndex = index;
      document.querySelector(".about__carousel-button-selected").classList.remove("about__carousel-button-selected");
      indicator.classList.add("about__carousel-button-selected");
      cards.style.transform = "translate(" + index * -100 + "%)"
      if (sectionIndex == 0) {
        left.style.display = "none";
        right.style.display = "initial";
      } else if (sectionIndex == 4) {
        right.style.display = "none";
        left.style.display = "initial";
      } else {
        left.style.display = "initial";
        right.style.display = "initial";
      }
    })
  })
  right.addEventListener("click", function () {
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;
    document.querySelector(".about__carousel-button-selected").classList.remove("about__carousel-button-selected");
    about_buttons[sectionIndex].classList.add("about__carousel-button-selected");
    cards.style.transform = "translate(" + sectionIndex * -100 + "%)";
    if (sectionIndex == 4) {
      this.style.display = "none";
    } else {
      left.style.display = "initial";
    }
  })

  left.addEventListener("click", function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    document.querySelector(".about__carousel-button-selected").classList.remove("about__carousel-button-selected");
    about_buttons[sectionIndex].classList.add("about__carousel-button-selected")
    cards.style.transform = "translate(" + sectionIndex * -100 + "%)";
    if (sectionIndex == 0) {
      this.style.display = "none";
    } else {
      right.style.display = "initial";
    }
  });

}

if (window.innerWidth <= 768) {
  aboutButtons768();
} else {
  aboutButtons769_1440();
}


window.addEventListener("resize", function () {
  if (window.innerWidth <= 768) {
    aboutButtons768();
  } else {
    aboutButtons769_1440();
  }
})

document.querySelectorAll(".favorites__card-submit").forEach((button) => {
  button.addEventListener("click", () => {
    if (!button.hasAttribute("disabled")) {
      button.classList.add("favorites__card-submit-owned");
      button.disabled = true;
      button.textContent = "Own";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector(".header__nav-burger");
  let menu = document.querySelector(".header__nav");
  if (window.innerWidth <= 1068) {
    menu.style.transform = "translate(100%)";
  } else {
    menu.style.transform = "translate(0%)";
  }
  element.addEventListener("click", function () {
    this.classList.toggle("burger__line-toggle");
    if (menu.style.transform === "translate(100%)") {
      menu.style.transform = "translate(0%)";
    } else {
      menu.style.transform = "translate(100%)";
    }
  });

  // Close menu on click of a menu item
  let menuItems = document.querySelectorAll(".header__item");
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 1068) {
        element.classList.toggle("burger__line-toggle"); // Close the menu
        menu.style.transform = "translate(100%)";
      } // Close the menu
    });
  });

  // Close menu when clicking anywhere on the page
  document.addEventListener("click", function (event) {
    if (window.innerWidth <= 1068) {
      let target = event.target;
      if (
        !menu.contains(target) &&
        !element.contains(target) &&
        menu.style.transform === "translate(0%)"
      ) {
        menu.style.transform = "translate(100%)";
        element.classList.toggle("burger__line-toggle"); // Close the menu
      }
    }
  });
});
window.addEventListener("resize", function () {
  let ex = document.querySelector(".header__nav");
  if (window.innerWidth > 1068) {
    ex.style.transform = "translate(0%)";
  } else {
    ex.style.transform = "translate(100%)";
  }
});

//Favoirites section

document.getElementById('winter-cards').style.opacity = 1;
document.getElementById('winter-cards').style.zIndex = 2;

document.querySelectorAll('.favorites__radio-button-check').forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {

    let favoritesCards = document.getElementById(`${this.id}-cards`);
    document.querySelectorAll('.favorites__cards').forEach(function (cards) {
      cards.style.opacity = 0;
      cards.style.zIndex = 0;
    })
    favoritesCards.style.opacity = 1;
    favoritesCards.style.zIndex = 2;
  });
});

console.log(
  "Вёрстка валидная +10\nВёрстка семантическая +16\nВёрстка соответствует макету +54\nОбщие требования к верстке +20\n"
);
