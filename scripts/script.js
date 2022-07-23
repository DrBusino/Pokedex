const screen = document.querySelector("#screen");

const menuSpan = document.querySelector("#menuSpan");
const menu = document.querySelector(".menu");

let menuOpened = false;

screen.addEventListener("click", () => {
  if (menuOpened) {
    menu.id = "menu";
    menuOpened = false;
  }
});

menuSpan.addEventListener("click", () => {
  if (menuOpened) {
    menu.id = "menu";
    menuOpened = false;
  } else {
    menu.id = "openMenu";
    menuOpened = true;
  }
});
