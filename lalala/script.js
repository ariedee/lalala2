// Data de início do relacionamento (substitua com a data correta)
const startDate = new Date('2024-07-29T17:15:00'); // Exemplo: 15 de março de 2022 às 14:30

function updateTimer() {
    const now = new Date();

    // Calcula a diferença em milissegundos
    const diff = now - startDate;

    // Converte a diferença para unidades maiores
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.4375); // Aproximando para 30.4375 dias por mês
    const years = Math.floor(months / 12);

    // Ajusta os valores restantes
    const remainingMonths = months % 12;
    const remainingDays = days % 30.4375;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    // Atualiza o texto do timer
    const timerElement = document.getElementById('timer');
    timerElement.innerText = '0 anos, 0 meses, 28 dias, 8 horas, 20 minutos, 5 segundos';
}

// Atualiza o timer a cada segundo
setInterval(updateTimer, 1000);

// Script para criar corações caindo
const heartContainer = document.body;

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duração da queda
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove o coração após 5 segundos
}

setInterval(createHeart, 300); // Cria um coração novo a cada 300 milissegundos