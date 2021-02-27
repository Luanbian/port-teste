const botaoAnimarP = document.getElementById("BtAn");
const caixaP = document.querySelector(".Perfil");
botaoAnimarP.addEventListener("click", () => {
  caixaP.style.animation = "";
  setTimeout(() => caixaP.style.animation = "fadeOut 1s linear", 5);
});
const botaoAnimarT = document.getElementById("BtMt");
const caixaT = document.querySelector(".Trabalhos");
botaoAnimarT.addEventListener("click", () => {
  caixaT.style.animation = "";
  setTimeout(() => caixaT.style.animation = "fadeIn 1s linear", 5);
});

