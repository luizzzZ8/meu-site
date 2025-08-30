let produtoSelecionado = '';

function scrollSuave(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/* LOGO volta ao topo */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("logo").addEventListener("click", () => {
    scrollSuave("#topo");
  });
});

/* Mostrar produto ao clicar em Comprar */
function scrollPagamento(nome, preco) {
  produtoSelecionado = `${nome} | R$ ${preco}`;
  document.getElementById("resumo").innerHTML =
    `Produto: <span>${nome}</span> | Preço: <span>R$ ${preco}</span><br>
    Após pagamento, entre em contato pelo WhatsApp para receber sua conta.<br>
    <strong style="color:#21e6c1; text-shadow:0 0 10px #21e6c1;">100% SEGURA</strong>`;
  scrollSuave("#finalizar");
}

/* Copiar Pix */
document.getElementById("pixBtn").addEventListener("click", () => {
  navigator.clipboard.writeText("417.710.408-66").then(() => {
    const btn = document.getElementById("pixBtn");
    const original = btn.textContent;
    btn.textContent = "Pix copiado!";
    setTimeout(() => (btn.textContent = original), 1200);
  });
});

/* WhatsApp após compra */
document.getElementById("whatsBtn").addEventListener("click", () => {
  if (!produtoSelecionado) {
    alert("Selecione um produto primeiro.");
    return;
  }
  const numero = "5511939053090";
  const mensagem = `Olá, já realizei o pagamento do ${produtoSelecionado} e gostaria de receber minha conta.`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
});

/* WhatsApp do contato */
function abrirWhatsAppContato() {
  const numero = "5511939053090";
  const mensagem = "Olá! Gostaria de saber mais sobre como funciona a loja e também sobre os jogos.";
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, "_blank");
}