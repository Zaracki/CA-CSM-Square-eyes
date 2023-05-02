const container = document.querySelector(".product_sorted");
const apiUrl = "https://api.noroff.dev/api/v1/square-eyes/";

async function fetchMovie() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  console.log(json);

  json.forEach(function(json) {
    container.innerHTML += `<div>
    <a href="details.html?id=${json.id}"><img src="${json.image}" class="product_item product_item-big" alt="${json.title}"></a>
  </div>`

  })

}

fetchMovie()