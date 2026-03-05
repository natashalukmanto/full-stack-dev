let firstCard = 10
let secondCard = 9
let sum = firstCard + secondCard
let blackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")

function startGame() {
    if (sum < 21) {
    message = "Do you want to draw a new card? :)"
    } else if (sum === 21) {
        message = "You have won! :D"
        blackjack = true
    } else {
        message = "You're out of the game. :("
        isAlive = false
    }

    messageEl.textContent = message
    
}

