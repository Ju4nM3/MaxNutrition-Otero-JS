let register__form = document.getElementById("form-newAccount");
register__form.addEventListener("click", registration);

function registration(e) {
	e.preventDefault();

	let input1 = document.getElementById("new-user");
	let input2 = document.getElementById("new-password");
	let input3 = document.getElementById("new-email");

	localStorage.setItem("newUser", input1.value);
	localStorage.setItem("newPassword", input2.value);
	localStorage.setItem("newEmail", input3.value);

	if (input1.value == "") {
		return false;
	} else if (input2.value == "") {
		return false;
	} else if (input3.value == "") {
		return false;
	}
	window.location.href = "../index.html";
}

let account = {
	newUser: localStorage.getItem("newUser"),
	newPassword: localStorage.getItem("newPassword"),
	newEmail: localStorage.getItem("newEmail"),
};
