const hambBtn = document.querySelector(".hambBtn");
const navBar = document.querySelector(".navbar");
const navBarBars = document.querySelectorAll(".hambBtn-Bar");

function sliderMenu() {
  hambBtn.classList.toggle("activeNavbar");
  navBar.classList.toggle("activeNavbar");
  for (element of navBarBars) {
    element.classList.toggle("activeHambBtnBars");
  }
}


