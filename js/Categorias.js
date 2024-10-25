// obtém o elemento do menu "Categorias"
const categoriasMenu = document.getElementById("categorias");

// obtém a div de categorias
const categoriasDiv = document.getElementById("categorias-menu");

// adiciona um evento de clique ao menu
categoriasMenu.addEventListener("click", () => {
  // mostra a div de categorias
  categoriasDiv.style.display = "block";
});

