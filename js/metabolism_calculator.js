let tmb_form = document.getElementById("tmb-form");

// Función que retorna como valor numérico la Tasa de Metabolismo Basal.
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
		return (edad, altura, peso) =>
			(peso * 10 + 6.25 * altura - 5 * edad - 161) * ejercicio;
	} else if (sexo == "hombre") {
		return (edad, altura, peso) =>
			(peso * 10 + 6.25 * altura - 5 * edad + 5) * ejercicio;
	}
}

// Función que se ejecuta al hacer click en el botón "Calcular".
tmb_form.addEventListener("submit", calculator);
function calculator(e) {
	e.preventDefault();
	// Dentro de "information" guardé un objeto con la información que se obtiene al apretar el botón del formulario al que se hace referencia.
	let information = {
		gender: tmb_form[0].value,
		age: tmb_form[1].value,
		weight: tmb_form[2].value,
		height: tmb_form[3].value,
		activity: tmb_form[4].value,
	};
	// Desestructuración del objeto "information" con alias necesarios para ejecutar la función "calculoTmb".
	let {
		gender: sexo,
		age: edad,
		weight: peso,
		height: altura,
		activity: ejercicio,
	} = information;
	// Guardo en "metabolsimo" la función que retorna la Tasa de Metabolismo Basal.
	let metabolismo = calculoTmb(sexo, ejercicio);
	// Guardo en "metabolsimo_final" la Tasa de Metabolismo Basal, pasándole los datos necesarios para que se haga el cálculo.
	let metabolismo_final = metabolismo(edad, altura, peso);
	// Declaro un objeto donde se guardan las distintas situaciones en virtud de las calorías consumidas.
	let limits = {
		unhealthy: metabolismo_final - 500,
		deficit: metabolismo_final - 200,
		maintain: metabolismo_final + 200,
		superavit: metabolismo_final + 500,
		excess: metabolismo_final * 2,
	};
	// Desestructuro dicho objeto para usar cada dato como variable.
	let { unhealthy, deficit, maintain, superavit, excess } = limits;
	// Declaro en un array los labels que tendrá mi gráfico "Torta".
	let labels = [
		`Unhealthy (0Kcal - ${unhealthy}Kcal)`,
		`Deficit (${unhealthy}Kcal - ${deficit}Kcal)`,
		`Maintain (${deficit}Kcal - ${maintain}Kcal)`,
		`Superavit (${maintain}Kcal - ${superavit}Kcal)`,
		`Excess (+${superavit}Kcal)`,
	];

	// Creo el gráfico "Torta", que explica el resultado final.
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
					backgroundColor: [
						"rgb(255, 0, 0, 0.5)",
						"rgb(83, 255, 200, 0.5)",
						"rgb(255, 255, 0, 0.5)",
						"rgb(255, 255, 255, 0.5)",
						"rgb(93, 67, 153, 0.5)",
					],
				},
			],
		},
	});

	// Guardamos en la variable "tmb_message" el elemento que contiene tanto al mensaje de Kcal, como el gráfico "Torta".
	let tmb_message = document.getElementById("tmb_message");
	// Al presionar el botón de "Calcular", se cambiará la clase de tmb_message, lo que permitirá que aparezcan el gráfico y el mensaje.
	tmb_message.className =
		"hero__metabolism-message hero__metabolism-message-on";
	let tmb_result = document.getElementById("tmb_result");
	tmb_result.innerHTML = metabolismo_final;
}
