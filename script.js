let produtoSelecionado = '';

function scrollPagamento(nome, preco) {
  produtoSelecionado = `${nome} | R$ ${preco}`;
  document.getElementById('produto-info').innerHTML =
    `Produto: <span>${nome}</span> | Preço: <span>R$ ${preco}</span><br>
    Após pagamento, entre em contato pelo WhatsApp para pegar a conta.<br>
    A conta vem com transferência de licença e é 100% segura.`;
  document.getElementById('pagamento').scrollIntoView({ behavior: 'smooth' });
}

function copyPix() {
  navigator.clipboard.writeText('417.710.408-66');
  alert('Pix copiado!');
}

function irWhatsapp() {
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
  const numero = '5511939053090';
  const mensagem = 'Olá, gostaria de tirar dúvidas sobre os jogos disponíveis.';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}