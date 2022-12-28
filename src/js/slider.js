const setas = document.getElementsByClassName("seta");
const setaDireita = document.getElementById("seta-direita");
const setaEsquerda = document.getElementById("seta-esquerda");
const cards = document.getElementsByClassName("container-projeto");


let indiceImagem = 0;


setaDireita.addEventListener('click', () => {
  indiceImagem++;
  setaEsquerda.disabled = false;

  cards[indiceImagem-1].classList.remove("mostrar");
  cards[indiceImagem].classList.add("mostrar");

  if(indiceImagem > 0) {
    setas[0].classList.remove("opacidade");
  }

  if(indiceImagem === 5) {
    setas[1].classList.add("opacidade");
    setaDireita.disabled = true;
  }    
})

setaEsquerda.addEventListener('click', () => {
  indiceImagem--;
  setaDireita.disabled = false;

  if(indiceImagem < 0) {
    indiceImagem = 0;
  } else if (indiceImagem >5) {
    indiceImagem = 5;
  } 

  cards[indiceImagem+1].classList.remove("mostrar");
  cards[indiceImagem].classList.add("mostrar");

  if(indiceImagem < 5) {
    setas[1].classList.remove("opacidade");
  }

  if(indiceImagem === 0) {
    setas[0].classList.add("opacidade");
    setaEsquerda.disabled = true;
  } else {
    setaEsquerda.disabled = false;
  }
});