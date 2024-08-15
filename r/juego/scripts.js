const cardsArray = [
    { name: 'card1', img: 'https://via.placeholder.com/100x100.png?text=1' },
    { name: 'card2', img: 'https://via.placeholder.com/100x100.png?text=2' },
    { name: 'card3', img: 'https://via.placeholder.com/100x100.png?text=3' },
    { name: 'card4', img: 'https://via.placeholder.com/100x100.png?text=4' },
    { name: 'card5', img: 'https://via.placeholder.com/100x100.png?text=5' },
    { name: 'card6', img: 'https://via.placeholder.com/100x100.png?text=6' },
    { name: 'card7', img: 'https://via.placeholder.com/100x100.png?text=7' },
    { name: 'card8', img: 'https://via.placeholder.com/100x100.png?text=8' },
];

const gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());

const memoryGame = document.querySelector('.memory-game');
const movesCounter = document.createElement('p');
const timerDisplay = document.createElement('p');
const victoryMessage = document.createElement('div');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;
let timer;
let seconds = 0;


movesCounter.textContent = `Movimientos: ${moves}`;
timerDisplay.textContent = `Tiempo: 00:00`;
victoryMessage.classList.add('victory-message');
victoryMessage.style.display = 'none';

document.body.prepend(movesCounter, timerDisplay);
document.body.appendChild(victoryMessage);


function startTimer() {
    timer = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = `Tiempo: ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}


function stopTimer() {
    clearInterval(timer);
}

gameGrid.forEach(item => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('memory-card');
    cardElement.dataset.name = item.name;

    const frontFace = document.createElement('img');
    frontFace.classList.add('front-face');
    frontFace.src = item.img;
    cardElement.appendChild(frontFace);

    memoryGame.appendChild(cardElement);

    cardElement.addEventListener('click', flipCard);
});

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!firstCard) {
        firstCard = this;
        if (moves === 0) startTimer();
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    moves++;
    movesCounter.textContent = `Movimientos: ${moves}`;

    if (firstCard.dataset.name === secondCard.dataset.name) {
        disableCards();
        matches++;
        if (matches === cardsArray.length) {
            stopTimer();
            showVictoryMessage();
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function showVictoryMessage() {
    victoryMessage.textContent = `¡Felicidades! Has completado el juego en ${moves} movimientos y ${timerDisplay.textContent.split(': ')[1]}.`;
    victoryMessage.style.display = 'block';
}
