// ------------ Creando Fecha ------------//
var DateTime = luxon.DateTime;
const now = DateTime.now();

let date = document.createElement("p");
date.innerText = now.toLocaleString();
date.className = "hero__metabolism-date";

let metabolismTitle = document.querySelector(".hero__metabolism-main h2");
metabolismTitle.append(date);

// ------------ CALCULADORA DE TMB ------------//
let tmb_form = document.getElementById("tmb-form")

function calculoTmb(sexo, ejercicio) {
    switch (ejercicio) {
        case "1":
          ejercicio = 1.2;
          break;
        case "2":
          ejercicio = 1.375;
          break;
        case "3":
          ejercicio = 1.55;
          break;
        case "4":
          ejercicio = 1.725;
          break;
        case "5":
          ejercicio = 1.9;
          break;
        }
        if (sexo == "mujer") {
            return (edad, altura, peso) => (peso * 10 + 6.25 * altura - 5 * edad - 161) * ejercicio;
        } else if (sexo == "hombre") {
            return (edad, altura, peso) => (peso * 10 + 6.25 * altura - 5 * edad + 5) * ejercicio;
        }
}

tmb_form.addEventListener("submit", calculator);
function calculator(e){
    e.preventDefault();
    sessionStorage.setItem("gender", tmb_form[0].value);
    sessionStorage.setItem("age", tmb_form[1].value);
    sessionStorage.setItem("weight", tmb_form[2].value);
    sessionStorage.setItem("height", tmb_form[3].value);
    sessionStorage.setItem("activity", tmb_form[4].value);

    let information = {
        gender: sessionStorage.getItem("gender"),
        age: sessionStorage.getItem("age"),
        weight: sessionStorage.getItem("weight"),
        height: sessionStorage.getItem("height"),
        activity: sessionStorage.getItem("activity")
    }
    let {gender: sexo, age: edad, weight: peso, height: altura, activity: ejercicio} = information;

    let metabolismo = calculoTmb(sexo, ejercicio);
    let metabolismo_final = metabolismo(edad, altura, peso);
    console.log(metabolismo_final)
}