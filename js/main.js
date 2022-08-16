hambBtn.addEventListener("click", sliderMenu);

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

login__form.addEventListener("submit", loginSystem);
