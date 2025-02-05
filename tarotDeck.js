let tarotDeck = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Justice", "The Hermit", "The Wheel of Fortune", "Strength", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"];
let discardPile = [];
let currentDeckTop = "";

function tarotDeckShuffle() {
    console.log(`Before`);
    console.log(`Tarot Deck: ${tarotDeck}`);
    console.log(`Discard Pile: ${discardPile}`);
    tarotDeckDiscard();
    while (discardPile.length > 0) {
        let randomCard = Math.floor(Math.random() * (discardPile.length - 1))
        if (discardPile[randomCard] != undefined) {
            let currentCard = discardPile[randomCard]
            tarotDeck.push(currentCard);
            discardPile.splice(randomCard, 1);
            console.log(`While Shuffling`);
            console.log(`Tarot Deck: ${tarotDeck}`);
            console.log(`Discard Pile: ${discardPile}`);
        }
    }
    console.log(`After`);
    console.log(`Tarot Deck: ${tarotDeck}`);
    console.log(`Discard Pile: ${discardPile}`);
}

function tarotDeckDiscard() {
    for (let i = 0; i < tarotDeck.length; i++) {
        currentDeckTop = tarotDeck[i];
        discardPile.push(currentDeckTop);
        console.log(`While Discarding`);
        console.log(`Tarot Deck: ${tarotDeck}`);
        console.log(`Discard Pile: ${discardPile}`);
    }
    tarotDeck = [];
}

function tarotDeckDraw() {
    if (tarotDeck.length > 0) {
        currentDeckTop = tarotDeck[0];
        cardText.innerHTML = `<strong>Current Card:</strong> ${currentDeckTop}`;
        discardPile.push(tarotDeck[0]);
        tarotDeck.shift();
        console.log(`Deck Length: ${tarotDeck.length}`);
        console.log(`Tarot Deck: ${tarotDeck}`);
        console.log(`Discard Length: ${discardPile.length}`);
        console.log(`Discard Pile: ${discardPile}`);
    } else {
        tarotDeckShuffle();
        tarotDeckDraw();
    }
}

function tarotIndex() {
    let len = prompt("How many cards ahead do you want to look?");
    let lenNumber;
    lenNumber = Number(len);
    return lenNumber
}

function userIndex() {
    let userCard = tarotIndex() - 1;
    if (tarotDeck[userCard] === undefined) {
        alert(`Not a card!`);
    } else {
        alert(tarotDeck[userCard]);
    }
}

shuffleButton.onclick = tarotDeckShuffle;
drawButton.onclick = tarotDeckDraw;
chanceButton.onclick = userIndex