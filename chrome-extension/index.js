let myLeads = JSON.parse(localStorage.getItem("myLeads")) || []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

render(myLeads)

function render(leads) {
    ulEl.innerHTML = ''
    for (let i = 0; i < leads.length; i++) {
        ulEl.innerHTML += 
        `<li>
            <a href="${myLeads[i]}" target="_blank">
                ${myLeads[i]}
            </a>
        </li>`
    }
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
