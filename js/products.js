const container = document.querySelector(".product_sorted");
const loadSpinner = document.querySelector(".container");
const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/";



  async function renderHTML() {
   try {
    loadSpinner.innerHTML = `<div class="lds-dual-ring"></div>`;
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json);

    loadSpinner.innerHTML = "";
    
    json.forEach(function(json) {
      container.innerHTML += `<div>
      <a href="details.html?id=${json.id}"><img src="${json.image}" class="product_item product_item-big" alt="${json.title}"></a>
    </div>`

    })
   }

   catch(error) {
    console.log(error);
   }
 

}

renderHTML()