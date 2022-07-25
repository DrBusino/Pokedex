const screen = document.querySelector("#screen");

const menuSpan = document.querySelector("#menuSpan");
const menu = document.querySelector(".menu");
const version = document.querySelector("#version");
const versionsTab = document.querySelector("#versionsTab");
const cardVersion = document.querySelector(".cardVersion");
let menuOpened = false;

async function getVersion() {
  const resp = await fetch(" https://pokeapi.co/api/v2/version?limit=100000");

  const data = await resp.json();
  const listVersions = data.results;
  listVersions.forEach((i) => {
    const div = document.createElement("div");
    div.className = "cardVersion";

    div.innerText = i.name;
    versionsTab.appendChild(div);
    console.log(i.name);
  });
}

getVersion();

version.addEventListener("click", () => {
  if (versionsTab.hidden) {
    versionsTab.hidden = false;

    console.log(versionsTab.hidden);
  } else {
    versionsTab.hidden = true;

    console.log(versionsTab.hidden);
  }
});

screen.addEventListener("click", () => {
  if (menuOpened) {
    menu.id = "menu";
    menuOpened = false;
  }

  if (!versionsTab.hidden) {
    versionsTab.hidden = true;
    console.log(versionsTab.hidden);
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
