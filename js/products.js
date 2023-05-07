import {apiUrl, spinnerDiv} from "./components/constants.js";

const container = document.querySelector(".product_sorted");
const loadingDiv = document.querySelector(".loadingContainer");



  async function renderHTML() {
   try {
    loadingDiv.innerHTML = spinnerDiv;
    const response = await fetch(apiUrl);
    const json = await response.json();

    loadingDiv.innerHTML = "";
    
    json.forEach(function(json) {
      container.innerHTML += `<div>
      <a href="details.html?id=${json.id}"><img src="${json.image}" class="product_item product_item-big" alt="${json.title}"></a>
      </div>`
    })
   }

   catch(error) {
    loadingDiv.innerHTML = displayError();
  }
 

}

renderHTML()