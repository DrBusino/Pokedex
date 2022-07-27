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
const blurScreen = document.querySelector("#blurScreen");
const dataPoke = document.querySelector("#dataPoke");
const dataPokePic = document.querySelector("#dataPokePic");
const dataPokeImg = document.querySelector("#dataPokeImg");
const dataPokeName = document.querySelector("#dataPokeName");
const dataPokeNum = document.querySelector("#dataPokeNum");
const dataPokeType = document.querySelector("#dataPokeType");
const dataPokeDesc = document.querySelector("#dataPokeDesc");
const dataPokeVersion = document.querySelector("#dataPokeVersion");
const dataPokeAbi = document.querySelector("#dataPokeAbi");

let menuOpened = false;

getPokeSpec();
setVersion();
//getPokeName();
//getVersion();

async function getPokeSpec() {
  const resp = await fetch(
    "https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0."
  );
  const data = await resp.json();
  const list = data.results;
  list.forEach((i) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    div.className = "cardPoke";
    img.className = "pokePic";
    img.alt = "Imagem oficial não encontrada";
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      list.indexOf(i) + 1
    }.png`;
    p.className = "pokeName";

    p.innerText = i.name;

    screen.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);

    div.addEventListener("click", () => {
      blurScreen.hidden = false;
    });
  });
  foundCount.innerText = list.length;
}

async function setVersion() {
  const resp = await fetch("https://pokeapi.co/api/v2/version");
  const data = await resp.json();
  const version = data.results;

  version.forEach((i) => {
    const div = document.createElement("div");
    div.className = "cardVersion";
    div.innerText = i.name;
    versionsTab.appendChild(div);
    div.addEventListener("click", () => {
      let c = 0;
      while (screen.firstChild) {
        screen.firstChild.remove();
      }
      for (let i = 1; i < 905; i++) {
        async function checkVersion() {
          const resp = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${i}/`
          );
          const data = await resp.json();
          const pokeVersionCheck = data.flavor_text_entries[0].version.name;
         

          if (pokeVersionCheck === div.innerText) {
            c++;

            const div = document.createElement("div");
            const img = document.createElement("img");
            const p = document.createElement("p");

            div.className = "cardPoke";
            img.className = "pokePic";
            img.alt = "Imagem oficial não encontrada";
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;
            p.className = "pokeName";

            p.innerText = data.name;

            screen.appendChild(div);
            div.appendChild(img);
            div.appendChild(p);

            div.addEventListener("click", () => {
              blurScreen.hidden = false;
              dataPokeImg.src = img.src;
              dataPokeName.innerText = p.innerText;



            });
          }
          foundCount.innerText = c;
        }

        checkVersion();
      }
    });
  });
}

btnIndex.addEventListener("click", () => {
  while (screen.firstChild) {
    screen.firstChild.remove();
  }
  getPokeSpec();
});

version.addEventListener("click", () => {
  if (versionsTab.hidden) {
    versionsTab.hidden = false;
  } else {
    versionsTab.hidden = true;
  }
});

screen.addEventListener("click", () => {
  if (menuOpened) {
    menu.id = "menu";
    menuOpened = false;
  }

  if (!versionsTab.hidden) {
    versionsTab.hidden = true;
  }
});

blurScreen.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    blurScreen.hidden = true;
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

async function getPokeId() {
  const respId = await fetch(i.url);
  const dataId = await respId.json();
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dataId.id}.png`;
}
