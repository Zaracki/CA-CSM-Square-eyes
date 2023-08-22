import {apiUrl, spinnerDiv} from "./components/constants.js";

const newArrivalsContainer = document.querySelector(".featured");
const topPicksContainer = document.querySelector(".top-picks");
const loadingDiv = document.querySelector(".loadingContainer");

  
  async function renderHTML() {
    try {
      loadingDiv.innerHTML = spinnerDiv;
      const response = await fetch(apiUrl);
      const json = await response.json();

      loadingDiv.innerHTML = "";
      
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

  async function renderFeatured(){
    try {
      loadingDiv.innerHTML = spinnerDiv;
      const featuredUrl = apiUrl + "?featured=true"
      const response = await fetch(featuredUrl);
      const json = await response.json();

      loadingDiv.innerHTML = "";

      for (var movie of json) {


        newArrivalsContainer.innerHTML += `
        <div>
        <a href="details.html?id=${movie.id}"><img src="${movie.images[0].src}" class="product_item" alt="${movie.name}"></a>
        </div>`
      }
    }

    catch(error) {
      loadingDiv.innerHTML = displayError();
    }
  }

  renderFeatured()
  renderHTML()

