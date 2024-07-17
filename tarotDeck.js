let tarotDeck = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Justice", "The Hermit", "The Wheel of Fortune", "Strength", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"];
let discardPile = [];

function tarotDeckShuffle() {
    while (discardPile.length > 0) {
        
    }
    console.log(`Deck Length: ${tarotDeck.length}`);
    console.log(`Deck: ${tarotDeck}`);
    console.log(`Discard Length: ${discardPile.length}`);
    console.log(`Discard: ${discardPile}`);
}

function tarotDeckDraw() {
    if (tarotDeck.length > 0) {
        let currentDeckTop = tarotDeck[0];
        cardText.innerHTML = `Current Card: ${currentDeckTop}`;
        discardPile.push(tarotDeck[0]);
        tarotDeck.shift();
        console.log(`Deck Length: ${tarotDeck.length}`);
        console.log(`Deck: ${tarotDeck}`);
        console.log(`Discard Length: ${discardPile.length}`);
        console.log(`Discard: ${discardPile}`);
    } else {
        tarotDeckShuffle();
    }
}

shuffleButton.onclick = tarotDeckShuffle;
drawButton.onclick = tarotDeckDraw;