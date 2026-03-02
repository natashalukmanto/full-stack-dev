// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
pEl = document.getElementById("error")

function purchase() {
    pEl.innerText = "Something went wrong, please try again"
}