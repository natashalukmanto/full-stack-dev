const homeEl = document.getElementById("home-score")
const guestEl = document.getElementById("guest-score")

const homeBox = document.getElementById("home")
const guestBox = document.getElementById("guest")

let home_score = 0
let guest_score = 0

function addPoints(team, points) {
  if (team === "home") {
    home_score += points
    homeEl.textContent = home_score
  } else {
    guest_score += points
    guestEl.textContent = guest_score
  }

  updateWinnerHighlight()
}

function updateWinnerHighlight() {
  homeBox.classList.remove("winning")
  guestBox.classList.remove("winning")

  if (home_score > guest_score) {
    homeBox.classList.add("winning")
  } else if (guest_score > home_score) {
    guestBox.classList.add("winning")
  }
}