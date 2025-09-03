let produtoSelecionado = "";

// Scroll suave corrigido
function scrollSuave(id) {
  document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
}

// Voltar ao topo
function scrollTop() {
  scrollSuave("#inicio");
}

// Exibir informações do jogo
function scrollPagamento(nome, preco) {
  produtoSelecionado = `${nome} | R$ ${preco}`;
  document.getElementById("produto-info").innerHTML =
    `Produto: <span style="color:#21e6c1; font-weight:bold;">${nome}</span> | Preço: <span style="color:#ff5d8f; font-weight:bold;">R$ ${preco}</span>`;
  scrollSuave("#pagamento");
}

// Copiar Pix
function copyPix() {
  navigator.clipboard.writeText("417.710.408-66").then(() => {
    const btn = document.getElementById("pix-button");
    const original = btn.textContent;
    btn.textContent = "Pix copiado!";
    setTimeout(() => (btn.textContent = original), 1200);
  });
}

// WhatsApp compra
function irWhatsapp() {
  if (!produtoSelecionado) {
    alert("Selecione um produto primeiro.");
    return;
  }
  const numero = "5511939053090";
  const mensagem = `Olá, já realizei o pagamento do ${produtoSelecionado} e gostaria de receber minha conta.`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
}

// WhatsApp contato
function irWhatsappContato() {
  const numero = "5511939053090";
  const mensagem = "Olá! Gostaria de saber mais sobre como funciona a loja e também sobre os jogos disponíveis.";
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
}

// Barra de pesquisa
function filtrarJogos() {
  const termo = document.getElementById("search").value.toLowerCase();
  const itens = document.querySelectorAll(".catalogo-item");
  itens.forEach(item => {
    const titulo = item.querySelector("h3").textContent.toLowerCase();
    item.style.display = titulo.includes(termo) ? "block" : "none";
  });
}

// Carrossel com 2 jogos por vez
function moverSlide(direcao, tipo) {
  const container = document.getElementById(`carousel-${tipo}`);
  const item = container.querySelector(".catalogo-item");
  if (!item) return;
  const largura = (item.offsetWidth + 25) * 2; // 2 jogos por vez
  container.scrollBy({
    left: direcao * largura,
    behavior: "smooth"
  });
}

// Arrastar com dedo/mouse
document.querySelectorAll(".carousel-container").forEach(container => {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  container.addEventListener("mouseleave", () => { isDown = false; });
  container.addEventListener("mouseup", () => { isDown = false; });
  container.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; 
    container.scrollLeft = scrollLeft - walk;
  });

  // Suporte para celular (touch)
  container.addEventListener("touchstart", e => {
    isDown = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });
  container.addEventListener("touchend", () => { isDown = false; });
  container.addEventListener("touchmove", e => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });
});