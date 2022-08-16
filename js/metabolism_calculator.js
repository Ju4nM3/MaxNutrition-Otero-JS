let tmb_form = document.getElementById("tmb-form");

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
function calculator(e) {
  e.preventDefault();
  let information = {
    gender: tmb_form[0].value,
    age: tmb_form[1].value,
    weight: tmb_form[2].value,
    height: tmb_form[3].value,
    activity: tmb_form[4].value,
  };
  let { gender: sexo, age: edad, weight: peso, height: altura, activity: ejercicio } = information;
  let metabolismo = calculoTmb(sexo, ejercicio);
  let metabolismo_final = metabolismo(edad, altura, peso);
  let limits = {
    unhealthy: metabolismo_final - 500,
    deficit: metabolismo_final - 200,
    maintain: metabolismo_final + 200,
    superavit: metabolismo_final + 500,
    excess: metabolismo_final * 2,
  };
  let { unhealthy, deficit, maintain, superavit, excess } = limits;
  let labels = [
    `Unhealthy (0Kcal - ${unhealthy}Kcal)`,
    `Deficit (${unhealthy}Kcal - ${deficit}Kcal)`,
    `Maintain (${deficit}Kcal - ${maintain}Kcal)`,
    `Superavit (${maintain}Kcal - ${superavit}Kcal)`,
    `Excess (+${superavit}Kcal)`,
  ];
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [labels[0], labels[1], labels[2], labels[3], labels[4]],
      datasets: [
        {
          label: "X",
          data: [unhealthy, deficit, maintain, superavit, excess],
          borderColor: ["rgb(93, 67, 153, 0.5)"],
          backgroundColor: ["rgb(255, 0, 0, 0.5)", "rgb(83, 255, 200, 0.5)", "rgb(255, 255, 0, 0.5)", "rgb(255, 255, 255, 0.5)", "rgb(93, 67, 153, 0.5)"],
        },
      ],
    },
  });
  let tmb_message = document.getElementById("tmb_message");
  tmb_message.className = "hero__metabolism-message hero__metabolism-message-on";
  let tmb_result = document.getElementById("tmb_result");
  tmb_result.innerHTML = metabolismo_final;
}
