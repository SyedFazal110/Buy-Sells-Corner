

const products = [
    {
      name: "Laptop",
      brand: "Dell XPS 13",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJZfuMV284pegBzgftQTbNwojzYziV3Y4Og&s",
      price: 999
    },
    {
      name: "Smartphone",
      brand: "Samsung Galaxy S21",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYHlneKwMmk92NLHShscxO-zC_jbd8P-7tQ&s",
      price: 799
    },
    {
      name: "Smartwatch",
      brand: "Apple Watch Series 6",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1xCZymA8YBV0fHdlsghozXB72eWCQh4oPTQ&s",
      price: 399
    },

    {
      name: "Refrigerator",
      brand: "LG Smart Inverter",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCMvbV1T20imUBz9BUTXy7GnHv8w1-AY6OlLd-9rhOYq7UjGXjFed6-rmIZv5Z8AAn9o&usqp=CAU",
      price: 1200
    },
    {
      name: "Microwave Oven",
      brand: "Samsung Convection",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8wGz5EgjX3A7oHmDpZKlCQ9g5KB2V3dN3Q&s",
      price: 250
    },
    {
      name: "Washing Machine",
      brand: "Bosch Front Load",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4LZMzN0tp_rhGc3qiMKL7mebPxKNBH5D_A&s",
      price: 800
    },
];
const card = document.querySelector("#card");

// Function to render the products:
function render() {
card.innerHTML = "";

products.map(items =>{
  card.innerHTML += `
  <div class="card w-96 border">
      <figure>
          <img src="${items.image}" alt="Image" class="w-full h-32 r">
      </figure>
      <div class="card-body">
          <h1 class="text-2xl">${items.name}</h1>
          <p>${items.brand}</p>
          <div class="card-actions justify-evenly">
          <p class="text-2xl"><b>Rs ${items.price}$</b></p>
              <button onclick="details()" class="btn btn-primary">More Info</button>
          </div>
      </div>
  </div>
  `
});
}
render();



// function to go login page:
function details() {
  window.location = "product.html";
}