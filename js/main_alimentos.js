let nutritionalInformationForm = document.querySelector("#formFood");
let foodContainer = document.querySelector("#food");

let peso = document.querySelector(".peso");
let calorias = document.querySelector(".calorias");
let carbos = document.querySelector(".carbos");
let grasas = document.querySelector(".grasas");
let proteinas = document.querySelector(".proteinas");

nutritionalInformationForm.addEventListener("submit", geInformation);

function geInformation(e) {
  e.preventDefault();
  let formulario = e.target;

  let foodOption = formulario.children[0].value;
  let amountOfFood = formulario.children[1].value;

  fetch("../json/food.json")
    .then((response) => response.json())
    .then((food) => {
      calorias.innerHTML = `Calorias: ${parseInt((food[foodOption - 1].Calorias / 100) * amountOfFood)}Kcal`;
      carbos.innerHTML = `Carbohidratos: ${parseInt((food[foodOption - 1].Carbohidratos / 100) * amountOfFood)}g`;
      grasas.innerHTML = `Grasas: ${parseInt((food[foodOption - 1].Grasa / 100) * amountOfFood)}g`;
      proteinas.innerHTML = `Proteínas: ${parseInt((food[foodOption - 1].Proteinas / 100) * amountOfFood)}g`;
    });
}
