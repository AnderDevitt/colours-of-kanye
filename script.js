async function getColor() {
    let response = await fetch('http://api.creativehandles.com/getRandomColor')
    let data = await response.json()
    console.log(data)
}

getColor()