// Número oficial de contato (E.164, sem espaços)
const WHATSAPP_NUMBER = "5511939053090";

function scrollToSection(id) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}

// Guarda o jogo selecionado para montar a mensagem do WhatsApp
let selectedGameName = null;
let selectedGamePrice = null;

function selectGame(name, price) {
  selectedGameName = name;
  selectedGamePrice = price;
  const selecionado = document.getElementById('selecionado');
  selecionado.innerText = `Você selecionou: ${name} - R$ ${price}`;
  // rola suave até a seção de finalizar
  document.getElementById('finalizar').scrollIntoView({ behavior: 'smooth' });
}

// Botão Pix: copiar chave
document.getElementById("pix").addEventListener("click", function () {
  navigator.clipboard.writeText("417.710.408-66").then(() => {
    alert("Chave Pix copiada!");
  });
});

// Botão WhatsApp após a compra
document.getElementById("whatsapp").addEventListener("click", function () {
  let mensagem;
  if (selectedGameName && selectedGamePrice) {
    mensagem = `Olá! Já realizei o pagamento do ${selectedGameName} por R$ ${selectedGamePrice} e gostaria de receber minha conta.`;
  } else {
    mensagem = "Olá! Já realizei o pagamento e gostaria de receber minha conta.";
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});

// Botão WhatsApp na seção Contato
document.getElementById("whatsapp-contato").addEventListener("click", function () {
  const msg = "Olá! Gostaria de saber mais sobre como funciona a loja e também sobre os jogos disponíveis.";
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});

/* Carrossel — 2 cards por vez + setas + arrastar */
let carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  let index = 0;
  const visibleCards = 2; // mostra 2 por vez

  function cardWidth() {
    return track.children[0].offsetWidth + 20; // largura + gap
  }
  function maxIndex() {
    return Math.max(track.children.length - visibleCards, 0);
  }
  function updateCarousel() {
    track.style.transform = `translateX(${-index * cardWidth()}px)`;
  }

  next.addEventListener('click', () => {
    if (index < maxIndex()) {
      index++;
      updateCarousel();
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  // Arrastar com mouse/touch
  let startX, startIndex, isDown = false;

  const startDrag = (pageX) => {
    isDown = true;
    startX = pageX;
    startIndex = index;
  };
  const moveDrag = (pageX) => {
    if (!isDown) return;
    const delta = pageX - startX;
    const step = delta / cardWidth();
    index = Math.min(Math.max(startIndex - step, 0), maxIndex());
    updateCarousel();
  };
  const endDrag = () => { isDown = false; };

  // mouse
  track.addEventListener('mousedown', e => startDrag(e.pageX));
  track.addEventListener('mousemove', e => moveDrag(e.pageX));
  track.addEventListener('mouseup', endDrag);
  track.addEventListener('mouseleave', endDrag);

  // touch
  track.addEventListener('touchstart', e => startDrag(e.touches[0].pageX), { passive: true });
  track.addEventListener('touchmove',  e => moveDrag(e.touches[0].pageX), { passive: true });
  track.addEventListener('touchend',   endDrag);

  // Inicializa posição
  updateCarousel();
});

/* Busca por título */
function searchGames() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    let title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}