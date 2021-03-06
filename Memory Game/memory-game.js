const cardArray = [
    {
        name: 'ball',
        img: 'images/butter-1.png'
    },
    {
        name: 'baby',
        img: 'images/butter-2.png'
    },
    {
        name: 'flower',
        img: 'images/butter-3.png'
    },
    {
        name: 'smile',
        img: 'images/butter-4.png'
    },
    {
        name: 'purple',
        img: 'images/butter-5.png'
    },
    {
        name: 'crown',
        img: 'images/butter-6.png'
    },
    {
        name: 'ball',
        img: 'images/butter-1.png'
    },
    {
        name: 'baby',
        img: 'images/butter-2.png'
    },
    {
        name: 'flower',
        img: 'images/butter-3.png'
    },
    {
        name: 'smile',
        img: 'images/butter-4.png'
    },
    {
        name: 'purple',
        img: 'images/butter-5.png'
    },
    {
        name: 'crown',
        img: 'images/butter-6.png', 
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
        // alert('You have clicked the same image!')


    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        // alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        // alert('Sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img) 
    if (cardsChosen.length ===2 ) {
        setTimeout(checkForMatch, 500)
    }
}
createBoard()