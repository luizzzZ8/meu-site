let produtoSelecionado = "";

// Scroll suave ao clicar em links e botões
function scrollSuave(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Voltar ao topo ao clicar na logo
function scrollTop() {
  document.querySelector("#inicio").scrollIntoView({ behavior: "smooth" });
}

// Exibir informações do jogo na área de pagamento
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

// WhatsApp após compra
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
    if (titulo.includes(termo)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}