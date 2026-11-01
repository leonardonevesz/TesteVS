// Elemento que receberá os corações
const areaCoracoes = document.getElementById("coracoes");

// Cria corações flutuantes
function criarCoracao() {

    const coracao = document.createElement("span");

    coracao.classList.add("coracao-flutuante");

    // Escolhe aleatoriamente um símbolo de coração
    const simbolos = ["❤", "♡", "♥"];

    coracao.textContent =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    // Posição horizontal aleatória
    coracao.style.left = Math.random() * 100 + "vw";

    // Tamanho aleatório
    coracao.style.fontSize =
        Math.random() * 20 + 12 + "px";

    // Duração aleatória da animação
    const duracao = Math.random() * 5 + 6;

    coracao.style.animationDuration = duracao + "s";

    // Adiciona o coração à página
    areaCoracoes.appendChild(coracao);

    // Remove o coração após a animação
    setTimeout(() => {
        coracao.remove();
    }, duracao * 1000);
}

// Cria corações periodicamente
setInterval(criarCoracao, 500);


// Navegação para a segunda página
function continuar() {

    const botao = document.getElementById("botaoContinuar");

    botao.disabled = true;
    botao.textContent = "Preparando uma surpresa... ❤️";

    setTimeout(() => {
        window.location.href = "pagina2.html";
    }, 700);

}

/* ===== PÁGINA 2 ===== */

/* Abrir o envelope e revelar a carta */

function abrirCarta() {
    const envelope = document.getElementById("envelope");
    const instrucao = document.getElementById("instrucao");
    const selo = document.getElementById("selo");

    if (!envelope || envelope.classList.contains("aberto")) {
        return;
    }

    envelope.classList.add("aberto");
    selo.setAttribute("aria-label", "Carta aberta");

    instrucao.textContent = "Uma mensagem escrita especialmente para você ❤️";

    iniciarMusica();
}

/* Iniciar música */

function iniciarMusica() {
    const musica = document.getElementById("musica");
    const botaoMusica = document.getElementById("botaoMusica");

    if (!musica) {
        return;
    }

    musica.volume = 0.5;

    musica.play()
        .then(() => {
            if (botaoMusica) {
                botaoMusica.textContent = "❚❚ Pausar música";
            }
        })
        .catch(() => {
            if (botaoMusica) {
                botaoMusica.textContent = "▶ Tocar música";
            }
        });
}

/* Pausar ou continuar a música */

function alternarMusica() {
    const musica = document.getElementById("musica");
    const botaoMusica = document.getElementById("botaoMusica");

    if (!musica || !botaoMusica) {
        return;
    }

    if (musica.paused) {
        iniciarMusica();
    } else {
        musica.pause();
        botaoMusica.textContent = "▶ Tocar música";
    }
}

/* Voltar à página inicial */

function voltar() {
    window.location.href = "index.html";
}

/* Tentar iniciar a música quando a página carregar */

document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musica");

    if (!musica) {
        return;
    }

    musica.volume = 0.5;

    musica.play().catch(() => {
        // Se o navegador bloquear a reprodução automática,
        // a música poderá começar ao clicar no selo.
    });
});