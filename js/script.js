// Mostra o botão de rolagem quando o usuário rolar para baixo
window.onscroll = function () {
    var btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        btn.style.display = "block"; // Exibe o botão
    } else {
        btn.style.display = "none"; // Esconde o botão
    }
};

// Função para rolar para o topo quando o botão for clicado
document.getElementById("scrollTopBtn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
