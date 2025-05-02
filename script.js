function comprar(jogo, preco) {
  const numero = '5511939053090';
  const mensagem = `Olá! Já fiz o pagamento do jogo ${jogo} no valor de R$ ${preco}. Gostaria de receber a conta, por favor.`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}