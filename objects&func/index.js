let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function randomHands() {
    return hands[Math.floor(Math.random() * 3)];
}

console.log(randomHands())