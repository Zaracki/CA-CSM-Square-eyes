import {apiUrl, spinnerDiv} from "./components/constants.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const resultsContainer = document.querySelector(".container");
const apiUrlId = apiUrl + "/" + id;

  resultsContainer.innerHTML = spinnerDiv;

  async function renderHTML() {

    try {
      const response = await fetch(apiUrlId);
      const json = await response.json();
      
      resultsContainer.innerHTML = `<section class="product-area">
      <div class="product-img">
      <img src="${json.images[0].src}" alt="Image of ${json.title}">
      </div>
      <div class="product-info">
      <h1>${json.name}</h1>
      <p>${json.description}</p>
      <a href="cart.html" class="cta cta-buy">Buy ${json.price_html}</a>
      </div>`;

      document.title = `${json.title}`; 
    }

    catch(error) {
      resultsContainer.innerHTML = displayError();
    }

  }

   renderHTML();

