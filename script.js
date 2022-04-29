// API FETCH REQUESTS HERE

// Kanye Quotes
const card1 = document.getElementsByClassName("quotesCardQuote1")
const card2 = document.getElementsByClassName("quotesCardQuote2")
const card3 = document.getElementsByClassName("quotesCardQuote3")
const card4 = document.getElementsByClassName("quotesCardQuote4")
const hero = document.getElementsByClassName("quotesHeroQuote")
async function getKanye() {
    let cardArray = []
    let quoteArray = []
    cardArray.push(card1.item(0), card2.item(0), card3.item(0), card4.item(0), hero.item(0))
    for(let i = 0; i < cardArray.length; i++) {
        let response = await fetch("https://api.kanye.rest")
        let data = await response.json()
        quoteArray.push(data.quote)
    }
    for(let i = 0; i < cardArray.length; i++){
        cardArray[i].innerText = quoteArray[i]
    }



    for(let i = 0; i < cardArray.length; i++){
        cardArray[i].innerText = quoteArray[i]
    }
}
getKanye();

// Random color generator api

async function getColor() {
    let response = await fetch('http://api.creativehandles.com/getRandomColor')
    let data = await response.json()
    let dataCol = data.color.substring(1)
    let responseScheme = await fetch(`https://www.thecolorapi.com/scheme?hex=${dataCol}&format=jsons&mode=triad&count=3`)
    let schemeData = await responseScheme.json()
    let schemeArray = []
    schemeArray.push(schemeData.colors[0].hex.value,schemeData.colors[1].hex.value, schemeData.colors[2].hex.value)
    changeColor(schemeArray)
    setTheme(schemeArray)
}

getColor()


const btn = document.getElementById("big-button");

btn.addEventListener('click', (event) => {
    getColor();
    getKanye();
})

function changeColor(schemeArray) {
    let colorOne = document.getElementsByClassName("colour-box-1");
    let colorTwo = document.getElementsByClassName("colour-box-2");
    let colorThree = document.getElementsByClassName("colour-box-3");
    colorOne.item(0).style.backgroundColor = schemeArray[0];
    colorTwo.item(0).style.backgroundColor = schemeArray[1];
    colorThree.item(0).style.backgroundColor = schemeArray[2];
}

function setTheme(schemeArray) {
    let root = document.documentElement;
    root.style.setProperty("--colour1", schemeArray[0])
    root.style.setProperty("--colour2", schemeArray[1])
    root.style.setProperty("--colour3", schemeArray[2])
}

