// ------------ HAMBURGER BUTTON + NAVMENU ------------ //
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

// ------------ LOGIN SYSTEM. ------------ //
let login__form = document.getElementById("login__form");
login__form.addEventListener("submit", loginSystem);

function loginSystem(e){
  e.preventDefault();

  let input1 = document.getElementById("current-user");
  let input2 = document.getElementById("current-password");

  localStorage.setItem("currentUser", input1.value);
  localStorage.setItem("currentPassword", input2.value);

  let currentUser = localStorage.getItem("currentUser");
  let currentPassword = localStorage.getItem("currentPassword");

 
  if(currentUser === account.newUser || currentUser === account.newEmail && currentPassword === account.newPassword) {
    login__form.submit();
    return true
  } else if (currentUser !== account.newUser) {
    input1.className = "error"
    return false
  } else if (currentPassword !== account.newPassword) {
    input2.className = "error"
    return false
  }
}

// ------------ CLOSING SESSION. ------------ //
let closingSessionBtn = document.getElementById("closeSession__btn");
closingSessionBtn.onclick = () => {
  Swal.fire({
    title: '¿Salir de MaxNutrition?',
    text: "Estás abandonando la sesión, ¿estás seguro?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Salír!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Adiós',
        '¡Te extrañaremos!',
        'success'
      )
      localStorage.clear(currentUser);
      localStorage.clear(currentPassword);
      window.location.reload();
    }
  })
}
