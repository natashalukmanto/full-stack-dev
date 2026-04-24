let myLeads = JSON.parse(localStorage.getItem("myLeads")) || []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

renderLeads()
console.log(deleteBtn)

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads()
})

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
    ulEl.innerHTML = ''
    for (let i = 0; i < myLeads.length; i++) {
        ulEl.innerHTML += 
        `<li>
            <a href="${myLeads[i]}" target="_blank">
                ${myLeads[i]}
            </a>
        </li>`
    }
}

function deleteLeads() {
    localStorage.clear()
    renderLeads()
}