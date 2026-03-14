let sum = 0
let cards = []
let blackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 145, 
    sayHello: function() {
        console.log("Hello, " + player.name)
    }
}

player.sayHello()

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    r = Math.floor(Math.random() * 13) + 2

    if (r === 1) {
        return 1
    } else if (r > 10) {
        return 10
    } else {
        return r
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    if (sum < 21) {
    message = "Do you want to draw a new card? :)"
    } else if (sum === 21) {
        message = "You have won! :D"
        blackjack = true
        isAlive = false
    } else {
        message = "You're out of the game. :("
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' '
    }
    
}

function newCard() {
    if (isAlive && !blackjack) {
        let new_card = getRandomCard()
        sum += new_card
        cards.push(new_card)
        renderGame()
    }
    
}

