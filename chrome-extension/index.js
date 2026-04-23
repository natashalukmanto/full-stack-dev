let myLeads = JSON.parse(localStorage.getItem("myLeads")) || []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

renderLeads()

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    ulEl.innerHTML += `
        <li>
            <a href="${inputEl.value}" target="_blank">
                ${inputEl.value}
            </a>
        </li>
    `
    inputEl.value = ""
})

function renderLeads() {
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += 
        `<li>
            <a href="${myLeads[i]}" target="_blank">
                ${myLeads[i]}
            </a>
        </li>`
    }
}