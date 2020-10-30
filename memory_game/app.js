document.addEventListener("DOMContentLoaded", () => { 

    const cardArray = [
        {
            name: "rainbow",
            img: "images/1.png"
        },
        {
            name: "rainbow",
            img: "images/1.png"
        },
        {
            name: "potato",
            img: "images/2.png"
        },
        {
            name: "potato",
            img: "images/2.png"
        },
        {
            name: "wand",
            img: "images/3.png"
        },
        {
            name: "wand",
            img: "images/3.png"
        },
        {
            name: "witch",
            img: "images/4.gif"
        },
        {
            name: "witch",
            img: "images/4.gif"
        },
        {
            name: "fire",
            img: "images/5.png"
        },
        {
            name: "fire",
            img: "images/5.png"
        },       
        {
            name: "heart",
            img: "images/6.png"
        },
        {
            name: "heart",
            img: "images/6.png"
        },

    ]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenID = [];
let cardsWon = [];


function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        let card = document.createElement("img");
        card.setAttribute("src", "images/blank.jpg");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    }            
}


function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenID[0];
    const optionTwoId = cardsChosenID[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        cardsWon.push(cards[optionOneId]);
        document.getElementById("result").innerHTML = cardsWon.length;
        alert("You found a match");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
    }
    else {
        cards[optionOneId].setAttribute("src", "images/blank.jpg");
        cards[optionTwoId].setAttribute("src", "images/blank.jpg");
        alert("sorry try again")
        
}
    cardsChosen = [];
    cardsChosenID = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "You won"
    }

    console.log(cardsWon);
}


function flipCard() {
    const cardID = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenID.push(cardID);
    console.log(cardsChosen);
    this.setAttribute("src", cardArray[cardID].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500) 
    }
}


createBoard();














})