const butts = document.querySelector("button");

butts.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.querySelector("body").classList.toggle("dark");
}
