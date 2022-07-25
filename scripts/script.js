const screen = document.querySelector("#screen");

const menuSpan = document.querySelector("#menuSpan");
const menu = document.querySelector(".menu");
const version = document.querySelector("#version");
const versionsTab = document.querySelector("#versionsTab");
const cardVersion = document.querySelector(".cardVersion");
const cardPoke = document.querySelectorAll(".cardPoke");
const foundCount = document.querySelector("#foundCount");
const pokeName = document.querySelector(".pokeName");
const btnIndex = document.querySelector("#btnIndex");
let menuOpened = false;

getVersion();
getPokeName();

async function getVersion() {
  const resp = await fetch(" https://pokeapi.co/api/v2/version?limit=100000");

  const data = await resp.json();
  const listVersions = data.results;
  listVersions.forEach((i) => {
    const div = document.createElement("div");
    div.className = "cardVersion";

    div.innerText = i.name;
    versionsTab.appendChild(div);
  });
}

async function getPokeName() {
  const resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );
  const data = await resp.json();
  const listPoke = data.results;
  foundCount.innerText = listPoke.length;

  listPoke.forEach((i) => {
    async function getPokeId() {
      const respId = await fetch(i.url);
      const dataId = await respId.json();
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dataId.id}.png`;
    }

    getPokeId();

    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    div.className = "cardPoke";
    img.className = "pokePic";
    img.alt = "Imagem oficial não encontrada";
    p.className = "pokeName";

    p.innerText = i.name;

    screen.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
  });
}



btnIndex.addEventListener("click", () => {
  while (screen.firstChild) {
    screen.firstChild.remove();
  }
  getPokeName();
});

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
