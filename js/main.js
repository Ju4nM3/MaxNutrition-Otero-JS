// ------------ Ejecutando Hamburger Button ------------//
hambBtn.addEventListener("click", sliderMenu);

// ------------ USER CONNECTION ------------//

/* let { newUser, newPassword, newEmail } = account; */
let currentUser = localStorage.getItem("currentUser");
let currentPassword = localStorage.getItem("currentPassword");

let userName = document.querySelector(".navbar__postLogin-user span");

fetch("users.json")
	.then((resp) => resp.json())
	.then((data) => {
		localStorage.setItem("accountUser-1", data[0].user);
		localStorage.setItem("accountUser-2", data[1].user);
		localStorage.setItem("accountUser-3", data[2].user);
		localStorage.setItem("accountUser-4", data[3].user);

		localStorage.setItem("accountPassword-1", data[0].password);
		localStorage.setItem("accountPassword-2", data[1].password);
		localStorage.setItem("accountPassword-3", data[2].password);
		localStorage.setItem("accountPassword-4", data[3].password);
	});

let accountUser_1 = localStorage.getItem("accountUser-1");
let accountUser_2 = localStorage.getItem("accountUser-2");
let accountUser_3 = localStorage.getItem("accountUser-3");
let accountUser_4 = localStorage.getItem("accountUser-4");

let accountPassword_1 = localStorage.getItem("accountPassword-1");
let accountPassword_2 = localStorage.getItem("accountPassword-2");
let accountPassword_3 = localStorage.getItem("accountPassword-3");
let accountPassword_4 = localStorage.getItem("accountPassword-4");

/* if (currentUser && currentPassword) {
    if (newUser === currentUser || newEmail === currentUser && newPassword === currentPassword) {
        document.getElementById("login-system").className = "navbar__loginContainer-off";
        document.getElementById("post-login").className = "navbar__postLoginContainer navbar__postLoginContainer-on";
        userName.innerHTML = currentUser;
    } else {
        document.getElementById("login-system").className = "navbar__loginContainer";
        document.getElementById("post-login").className = "navbar__postLoginContainer";
    }
} else {
    document.getElementById("login-system").className = "navbar__loginContainer";
    document.getElementById("post-login").className = "navbar__postLoginContainer";
} */

if (currentUser && currentPassword) {
	if (
		(accountUser_1 === currentUser ||
			accountUser_2 === currentUser ||
			accountUser_3 === currentUser ||
			accountUser_4 === currentUser) &&
		(accountPassword_1 === currentPassword ||
			accountPassword_2 === currentPassword ||
			accountPassword_3 === currentPassword ||
			accountPassword_4 === currentPassword)
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
