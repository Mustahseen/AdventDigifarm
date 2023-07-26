// Sidebar - Add hovered class to selected list items
let list = document.querySelectorAll(".sidebar .container li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".container");
let navbar = document.querySelector(".navbar");
let dashboard = document.querySelector(".dashboard");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  navbar.classList.toggle("active");
  dashboard.classList.toggle("active");
};
