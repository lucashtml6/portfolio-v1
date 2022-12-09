// Seleção de elementos
const btnMenuToggle = document.getElementById("btn-menu-toggle");
const nav = document.getElementById("nav");
const cabecalho = document.getElementById("cabecalho");
const btnRedesSociais = document.getElementById("btn-redes-sociais");

// eventos
btnMenuToggle.addEventListener("click", () => {
  nav.classList.toggle("ativo");
  cabecalho.classList.toggle("ativo");
});

btnRedesSociais.addEventListener("click", () => {
  cabecalho.classList.toggle("on");
});