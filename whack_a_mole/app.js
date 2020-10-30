const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let setTime = 5

timeLeft.textContent = setTime;
let currentTime = timeLeft.textContent;




square.forEach(id => {
    id.addEventListener("mouseup", () => {
        if(id.id === hitPosition) {
            result = result + 1
            score.textContent = result;
        }
    })
})


function randomSquare() {
    square.forEach(className => {
        className.classList.remove("mole");
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
    //asign the id of the randomPosition 
    hitPosition = randomPosition.id;
}


function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500);
}

function counterDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        timeLeft.textContent = setTime;
        currentTime = timeLeft.textContent;
        score.textContent = 0;
        result = 0;
        alert("game over, you final score is" + result);
    }
}

moveMole() 
let timerId = setInterval(counterDown, 1000);


