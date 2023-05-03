const newArrivalsContainer = document.querySelector(".new-arrivals");
const topPicksContainer = document.querySelector(".top-picks");
const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/";
const loadSpinner = document.querySelector(".container");

  
  async function renderHTML() {
    try {
      loadSpinner.innerHTML = `<div class="lds-dual-ring"></div>`;
      const response = await fetch(apiUrl);
      const json = await response.json();

      console.log(json);

      loadSpinner.innerHTML = "";
      
      for (let i = 0; i <= 3; i++) {
        let currentJson = json[i];

        newArrivalsContainer.innerHTML += `
        <div>
        <a href="details.html?id=${currentJson.id}"><img src="${currentJson.image}" class="product_item" alt="${currentJson.title}"></a>
        </div>`
      }

      for (let i = 4; i <= 7; i++) {
        let currentJson = json[i];

        topPicksContainer.innerHTML += `
        <div>
        <a href="details.html?id=${currentJson.id}"><img src="${currentJson.image}" class="product_item" alt="${currentJson.title}"></a>
        </div>`
      }
    }

    catch(error) {
      console.log(error);
    }

  
  }
  renderHTML()

