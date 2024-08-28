import RickAndMortyService from "./service.js";

// acá deberás crear una instancia del servicio RickAndMortyService
const service = new RickAndMortyService();

// esta función debe encargarse de obtener el elemento contenedor
// y agregar los personajes obtenidos por el API, deberás llamar tu función getAllCharacters
// iterar el arreglo de personajes y llamar a la función createCharacterCard para agregar cada personaje
// a el contenedor puedes usar la propiedad innerHTML para esto

async function createCharacterList() {
  try {
    var characterList = await service.getAllCharacters();
    const characterListDiv = document.querySelector(".character-list");
    for (var i = 0; i < characterList.length; i++) {
      let character = characterList[i];
      const characterCard = createCharacterCard(character);
      characterListDiv.insertAdjacentHTML('beforeend', characterCard);
      addCharacterListeners(character);
    }
  } catch (e) {
    document.getElementById(
      "app"
    ).innerHTML = `<div>Se ha generado el siguiente error al llamar al crear las cartas: ${e}</div>`;
  }
  // llamar primero createCharacterCard(character);
  // llamar segundo addCharacterListeners(character);
}

// esta función debe devolver la estructura html en string de tu personaje ejemplo

// `<div class="character">
//      <span>${gender}</span>
//      <span>${name}</span>
// </div>`;

// deberás usar los elementos correctos de HTML para poder visualizar el personaje

function createCharacterCard(character) {
  const statusCase = character["status"].toLowerCase();
  return `<div class="character-card">
                <img src="${character["image"]}" class="character-image"/>
                <div class="character-information">
                  <div class="character-description">
                    <span class="character-name">${character["name"]}</span>
                    <div class="characteristic">
                      <img class="characteristic-image" id="${statusCase}" src="./assets/live.svg">
                      <span>${character["status"]}</span>
                    </div>
                    <div class="characteristic">
                      <img class="characteristic-image" src="./assets/race.svg">
                      <span>${character["species"]}</span>
                    </div>
                    <div class="characteristic">
                      <img class="characteristic-image" src="./assets/planet.svg">
                      <span>${character["firstSeen"]["name"]}</span>
                    </div>
                  </div>
                  <img class= "heart-image" src="./assets/heart.svg" id="heart-button-${character["name"]}">
                </div>
            </div>`;
}

// esta función deberá obtener todos los personajes y deberá agregarles un evento de click en el icono de corazon
// cuando se haga click al icono de corazon aparecer una alerta con un mensaje
// que diga Hola soy (nombre personaje), recuerda que puedes obtener
// el elemento target de un evento y así obtener sus propiedades

function addCharacterListeners(character) {
  try {
    let idListener= "heart-button-"+`${character["name"]}`
    let heartButton = document.getElementById(idListener);
    heartButton.addEventListener("click", function (event) {
      alert(
        `Hola soy ${character["name"]} y este es el trabajo de Carlos Farouk Abdalá`
      );
    });
  } catch (e) {
    document.getElementById(
      "app"
    ).innerHTML = `<div>Se ha generado el siguiente error al llamar al crear el Listener: ${e}</div>`;
  }
}

// por último se llama la función y se renderiza la vista
createCharacterList();
