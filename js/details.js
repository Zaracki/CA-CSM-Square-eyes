const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



const container = document.querySelector(".container");
const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/" + id;


  container.innerHTML = `<div class="lds-dual-ring"></div>`;

  async function renderHTML() {

    try {
      const response = await fetch(apiUrl);
      const json = await response.json();

      setTimeout(function(){
      
      container.innerHTML = `<section class="product-area">
      <div class="product-img">
      <img src="${json.image}" alt="Image of ${json.title}">
      </div>
      <div class="product-info">
      <h1>${json.title}</h1>
      <p>${json.description}</p>
      <a href="cart.html" class="cta cta-buy">Buy ${json.price}$</a>
      </div>`;

      document.title = `${json.title}`; 
      });
    }

    catch(error) {
      console.log(error);
    }

  }

   renderHTML();

