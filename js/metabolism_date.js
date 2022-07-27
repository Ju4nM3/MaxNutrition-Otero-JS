var DateTime = luxon.DateTime;
const now = DateTime.now();

let date = document.createElement("p");
date.innerText = now.toLocaleString();
date.className = "hero__metabolism-date";

let metabolismTitle = document.querySelector(".hero__metabolism-main h2");
metabolismTitle.append(date);