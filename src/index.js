let now = new Date();
let currentDate = document.querySelector("#current-date");

let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`
];
let day = days[now.getDay()];

currentDate.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("h1");
  city.innerHTML = `${searchInput.value}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
