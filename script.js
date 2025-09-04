let currentIndex = 0;

function moveCarousel(button, direction) {
  const carousel = button.parentElement;
  const track = carousel.querySelector(".carousel-track");
  const cards = track.children;
  const cardWidth = cards[0].offsetWidth + 20; // largura + margem
  const visibleCards = 2; // mostrar 2 por vez

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > cards.length - visibleCards) {
    currentIndex = cards.length - visibleCards;
  }

  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// selecionar jogo
function selectGame(name, price) {
  document.getElementById("game-name").textContent = name;
  document.getElementById("game-price").textContent = `R$ ${price}`;
  document.getElementById("whatsapp-link").href =
    `https://wa.me/5511939053090?text=Olá, já realizei o pagamento do jogo *${name}* no valor de *R$${price}*. Gostaria de receber a conta.`;
  scrollToSection('compra');
}

// copiar pix
function copyPix() {
  navigator.clipboard.writeText("417.710.408-66");
  alert("Chave Pix copiada!");
}

// rolagem suave
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// pesquisa
function searchGame() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}