// API FETCH REQUESTS HERE
async function getKanye() {
    let response = await fetch("https://api.kanye.rest")
    let data = await response.json()
    console.log(data.quote)
    printKanye(data.quote)
}
const domBody = document.querySelector('body')

function printKanye(kanye) {
    let divKanye = document.createElement("div")
    divKanye.setAttribute("id", "divKanye")
    let kanyeH1 = document.createElement("h1")
    kanyeH1.innerText = kanye
    divKanye.appendChild(kanyeH1)
    domBody.appendChild(divKanye)
}

getKanye();
