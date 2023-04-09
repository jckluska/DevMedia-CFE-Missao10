
var acc = document.getElementsByClassName("sanfona-fechada");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    //Alternar entre adicionar e remover a classe "sanfona-aberta" 
    this.classList.toggle("sanfona-aberta");

    //Alternar entre ocultar e mostrar o painel ativo 
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      
    } else {
      // panel.style.display = "block";
      panel.classList.toggle("painel-aberto")
    }
  });
}
