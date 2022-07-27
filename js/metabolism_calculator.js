let tmb_form = document.getElementById("tmb-form");
let tmb_message = document.getElementById("tmb_message");

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
    sessionStorage.setItem("metabolismo", metabolismo_final);

    tmb_message.className = 'hero__metabolism-message hero__metabolism-message-on';
    let tmb_result = document.getElementById("tmb_result");
    tmb_result.innerHTML = metabolismo_final;
}

let metabolismUser = parseInt(sessionStorage.getItem("metabolismo"));

let limits = {
  unhealthy: metabolismUser - 500,
  deficit: metabolismUser - 200,
  maintain: metabolismUser + 200,
  superavit: metabolismUser + 500,
  excess: metabolismUser * 2,
}

let {unhealthy, deficit, maintain, superavit, excess} = limits;

let labels = [`Unhealthy (0-${unhealthy})`, `Deficit (${unhealthy}-${deficit})`, `Maintain (${deficit}-${maintain})`, `Superavit (${maintain}-${superavit})`, `Excess (${superavit}-${excess})`];
let dataArray = [unhealthy, deficit, maintain, superavit, excess];


