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
    console.log(cardArray)
    for(let i = 0; i < cardArray.length; i++) {
        let response = await fetch("https://api.kanye.rest")
        let data = await response.json()
        console.log(data.quote)
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
    console.log(data)
}

getColor()