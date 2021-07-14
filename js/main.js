// menu

let elMenu = document.querySelector(".sitenav--mobile");
let elMenuToggle = document.querySelector(".menu-toggle");

elMenuToggle.addEventListener("click", () => {
  elMenu.closest(".site-header").classList.toggle("site-header--action");
});
