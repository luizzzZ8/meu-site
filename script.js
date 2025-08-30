let produtoSelecionado = '';

/* Rolagem suave garantida em todos os links internos (menu e Início) */
document.addEventListener('DOMContentLoaded', () => {
  // Links com hash
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = a.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

/* Fallback robusto para topo (logo e Início) */
function scrollTop() {
  if (window.scrollTo) window.scrollTo({ top: 0, behavior: 'smooth' });
  else if (document.documentElement && document.documentElement.scrollTop !== undefined) {
    document.documentElement.scrollTop = 0;
  } else {
    document.body.scrollTop = 0;
  }
}

/* Efeito de clique (pulse) em botões */
function pulse(el){
  if (!el) return;
  el.classList.add('pulse');
  setTimeout(() => el.classList.remove('pulse'), 350);
}

function scrollPagamento(nome, preco) {
  // pulse no botão que foi clicado
  pulse(event?.currentTarget);

  produtoSelecionado = `${nome} | R$ ${preco}`;
  document.getElementById('produto-info').innerHTML =
    `Produto: <span>${nome}</span> | Preço: <span>R$ ${preco}</span><br>
    Após pagamento, entre em contato pelo WhatsApp para pegar a conta.<br>
    A conta vem com transferência de licença e é 100% segura.`;

  document.getElementById('pagamento').scrollIntoView({ behavior: 'smooth' });
}

function copyPix() {
  const btn = document.getElementById('pix-button');
  pulse(btn);

  navigator.clipboard.writeText('417.710.408-66').then(() => {
    const original = btn.textContent;
    btn.textContent = 'Pix copiado!';
    setTimeout(() => { btn.textContent = original; }, 1200);
  }).catch(() => {
    alert('Pix copiado!');
  });
}

function irWhatsapp() {
  const btn = document.getElementById('whatsapp-button');
  pulse(btn);

  if (!produtoSelecionado) {
    alert('Selecione um produto primeiro.');
    return;
  }
  const numero = '5511939053090';
  const mensagem = `Olá, realizei o pagamento do ${produtoSelecionado} e gostaria de receber minha conta.`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

function irWhatsappContato() {
  // tenta identificar o botão que chamou
  pulse(event?.currentTarget);

  const numero = '5511939053090';
  const mensagem = 'Olá, gostaria de tirar dúvidas sobre os jogos disponíveis.';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}