// JavaScript para el buscador
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-bar");
  const products = [
    {
      id: 1,
      name: "Balde",
      image: "valde.jpg",
      link: "balde.html", // Enlace específico para el producto "Balde"
    },
    {
      id: 2,
      name: "Llave de paso",
      image: "LLLAVE.jpg",
      link: "llave.html", // Enlace específico para el producto "Llave de paso"
    },
    {
      id: 3,
      name: "Cerradura",
      image: "CERRA.jpg",
      link: "cerradura.html", // Enlace específico para el producto "Cerradura"
    },
    // Agrega más productos aquí
  ];

  // Función para filtrar productos por nombre
  function filterProductsByName(searchTerm) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayFilteredProducts(filteredProducts);
  }

  // Función para mostrar los productos filtrados en el DOM
  function displayFilteredProducts(filteredProducts) {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    filteredProducts.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const productLink = document.createElement("a");
      productLink.href = product.link; // Usar el enlace específico del producto
      productLink.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="search-result-image">
        <h3>${product.name}</h3>
      `;

      const buyButton = document.createElement("button");
      buyButton.innerText = "Comprar";
      buyButton.classList.add("buy-button");

      productElement.appendChild(productLink);
      productElement.appendChild(buyButton);

      productsContainer.appendChild(productElement);
    });
  }

  // Evento para buscar productos cuando se escriba en la barra de búsqueda
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value;
    filterProductsByName(searchTerm);
  });
});

