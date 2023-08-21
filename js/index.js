import {apiUrl, spinnerDiv} from "./components/constants.js";

const newArrivalsContainer = document.querySelector(".new-arrivals");
const topPicksContainer = document.querySelector(".top-picks");
const loadingDiv = document.querySelector(".loadingContainer");

  
  async function renderHTML() {
    try {
      loadingDiv.innerHTML = spinnerDiv;
      const response = await fetch(apiUrl);
      const json = await response.json();


      loadingDiv.innerHTML = "";
      
      for (let i = 0; i <= 3; i++) {
        let currentJson = json[i];

        newArrivalsContainer.innerHTML += `
        <div>
        <a href="details.html?id=${currentJson.id}"><img src="${currentJson.images[0].src}" class="product_item" alt="${currentJson.title}"></a>
        </div>`
      }

      for (let i = 4; i <= 7; i++) {
        let currentJson = json[i];

        topPicksContainer.innerHTML += `
        <div>
        <a href="details.html?id=${currentJson.id}"><img src="${currentJson.images[0].src}" class="product_item" alt="${currentJson.title}"></a>
        </div>`
      }
    }

    catch(error) {
      loadingDiv.innerHTML = displayError();
    }

  
  }
  renderHTML()

