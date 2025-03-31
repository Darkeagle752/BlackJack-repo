let dealerCards1 = 0;
let dealerCards2 = 0;
dealerCardsTotal = dealerCards1 + dealerCards2;

let playerCards = 0;

function getCards() {
    return Math.floor(Math.random()*12);
}

function startGame() {
    dealerCards1 = getCards();
    dealerCards2 = getCards();
    dealerCardsTotal = dealerCards1 + dealerCards2;

    playerCards = getCards() + getCards();
    console.log("you have a total of " + dealerCardsTotal)

}

startGame();