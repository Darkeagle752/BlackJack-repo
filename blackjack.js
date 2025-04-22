let dealerCards1 = 0;
let dealerCards2 = 0;
dealerCardsTotal = dealerCards1 + dealerCards2;

let playerCards = 0;

function getCards() {
    return Math.floor(Math.random()*12);
}

function startGame() {
   let dealerCards1 = getCards();
    let dealerCards2 = getCards();
   let dealerCardsTotal = dealerCards1 + dealerCards2;

    let playercards1 = getCards();
    let playercards2 = getCards();
    let playerTotal = playercards1 + playercards2;

    console.log("you have a total of " + dealerCardsTotal)
    console.log('Your total: ${playerTotal}');
    while(playerTotal < 21) {
       let question = prompt("hit or stand?");
       if(question = "hit") {
        playerTotal = playerTotal + getCards();
       }
    }

}

startGame();