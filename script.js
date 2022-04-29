// API FETCH REQUESTS HERE

// Kanye Quotes
const card1 = document.getElementsByClassName("quotesCardQuote1");
const card2 = document.getElementsByClassName("quotesCardQuote2");
const card3 = document.getElementsByClassName("quotesCardQuote3");
const card4 = document.getElementsByClassName("quotesCardQuote4");
const hero = document.getElementsByClassName("quotesHeroQuote");
async function getKanye() {
  let cardArray = [];
  let quoteArray = [];
  cardArray.push(
    card1.item(0),
    card2.item(0),
    card3.item(0),
    card4.item(0),
    hero.item(0)
  );
  for (let i = 0; i < cardArray.length; i++) {
    let response = await fetch("https://api.kanye.rest");
    let data = await response.json();
    quoteArray.push(finestMoment(data.quote, naughtyYeezus));
  }
  for (let i = 0; i < cardArray.length; i++) {
    cardArray[i].innerText = quoteArray[i];
  }
  for (let i = 0; i < cardArray.length; i++) {
    cardArray[i].innerText = quoteArray[i];
  }
}

// kayne's finest moments functions
// takes the sentence and the callback function
let finestMoment = (sentence, modifier) => {
  return sentence.split(" ").map(modifier).join(" ");
};
// converts naughty word to safe word
let naughtyYeezus = (word) => {
  if (word.toLowerCase() === "fuck") {
    return "chicken-lickin";
  } else if (word.toLowerCase() === "shit") {
    return "donkey";
  } else if (word.toLowerCase() === "bitch") {
    return "pizza";
  } else if (word.toLowerCase() === "fucking") {
    return "donkey";
  } else {
    return word;
  }
};

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

const btn = document.getElementById("big-button");

btn.addEventListener("click", (event) => {
  getColor();
  getKanye();
  randomImage();
});

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

function randomImage() {
    let min = 1
    //let max = 12
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let images = new Array(
        document.getElementsByClassName("quotesHeroImage").item(0),
        document.getElementsByClassName("quotesCardImg1").item(0),
        document.getElementsByClassName("quotesCardImg2").item(0),
        document.getElementsByClassName("quotesCardImg3").item(0),
        document.getElementsByClassName("quotesCardImg4").item(0)
    )
    let existing = []

    while(existing.length < 5) {
        let randomNum = Math.floor(Math.random()*(numbers.length - min)+min)
        if(!existing.includes(randomNum)){
            existing.push(randomNum)
        }
    }
    for(let image of images) {
        let index = images.indexOf(image)
        image.src = `./images/${existing[index]}.jpg`
    }
}

getKanye();
getColor();
randomImage();