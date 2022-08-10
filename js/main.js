// ------------ Ejecutando Hamburger Button ------------//
hambBtn.addEventListener("click", sliderMenu);

// ------------ USER CONNECTION ------------//

let { newUser, newPassword, newEmail } = account;
let currentUser = localStorage.getItem("currentUser");
let currentPassword = localStorage.getItem("currentPassword");

let userName = document.querySelector(".navbar__postLogin-user span");

if (currentUser && currentPassword) {
	if (
		newUser === currentUser ||
		(newEmail === currentUser && newPassword === currentPassword)
	) {
		document.getElementById("login-system").className =
			"navbar__loginContainer-off";
		document.getElementById("post-login").className =
			"navbar__postLoginContainer navbar__postLoginContainer-on";
		userName.innerHTML = currentUser;
	} else {
		document.getElementById("login-system").className =
			"navbar__loginContainer";
		document.getElementById("post-login").className =
			"navbar__postLoginContainer";
	}
} else {
	document.getElementById("login-system").className = "navbar__loginContainer";
	document.getElementById("post-login").className =
		"navbar__postLoginContainer";
}

// ------------ Ejecutando Sistema de Login ------------//
login__form.addEventListener("submit", loginSystem);
