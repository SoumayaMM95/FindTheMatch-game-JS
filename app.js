const cardArray = [
    {
        name: 'circle',
        img: 'images/circle.png'
    },
    {
        name: 'diamond',
        img: 'images/diamond.png'
    },
    {
        name: 'heart',
        img: 'images/heart.png'
    },
    {
        name: 'square',
        img: 'images/square.png'
    },
    {
        name: 'star',
        img: 'images/star.png'
    },
    {
        name: 'triangle',
        img: 'images/triangle.png'
    },
    {
        name: 'circle',
        img: 'images/circle.png'
    },
    {
        name: 'diamond',
        img: 'images/diamond.png'
    },
    {
        name: 'heart',
        img: 'images/heart.png'
    },
    {
        name: 'square',
        img: 'images/square.png'
    },
    {
        name: 'star',
        img: 'images/star.png'
    },
    {
        name: 'triangle',
        img: 'images/triangle.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()) //shuffle the array randomly
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
    // console.log(cardArray)
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
    else if (cardsChosen[0] == cardsChosen[1]){
        // console.log('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
      }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congrats You Won'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    // console.log(cardsChosen)
    // console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 300)
    }
}





