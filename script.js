document.addEventListener("DOMContentLoaded", function() {
  const botao = document.getElementById("btn");
  const msg = document.getElementById("mensagem");

  botao.addEventListener("click", () => {
    msg.textContent = "Você clicou no botão!";
  });
});
