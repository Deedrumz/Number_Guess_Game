// document.body.style.backgroundColor = 'red'

// let btn = document.querySelector('.btn.check')

// let bcgd = document.body

// function checkColor() {
//     bcgd.style.backgroundColor = 'yellow'
//     // let sth = bcgd.classList.contains('yellow')

//     // if (sth) {
//     //     bcgd.classList.add('yellow')
//     // } else {
//     //     bcgd.classList.remove('yellow')
//     // }
// }

// btn.addEventListener('click', checkColor)

// function changeColor() {
//     let sth = bcgd.classList.contains('yellow')

//     if (sth) {
//         bcgd.classList.remove('yellow')
//     } else {
//         bcgd.classList.add('yellow')
//     }
// }

// btn.addEventListener('click', changeColor)

//FUNCTION FOR CHECK NUMBER GUESS ON CLICKING CHECK

let randomNumber = Math.floor(Math.random() * 5 + 1);
// let randomNumber = 5;

let score = 20;

let highScore = 0;

let msg = document.querySelector('.message')

let num = document.querySelector('.number')

let btn = document.querySelector(".check")

let Score = document.querySelector(".score")

let highscore = document.querySelector('.highscore')

let again = document.querySelector('.again')

let guess = document.querySelector('.guess')
// let data = Number(document.querySelector('.guess').value)

function chat(message) {
    msg.textContent = message
}

function cheq() {

    data = Number(document.querySelector('.guess').value)

    if (!data) {
        chat('type a number')
        document.body.style.backgroundColor = "black"
        num.textContent = "?"

    } else if (data === randomNumber) {
        chat('Correct')
        num.textContent = randomNumber
        document.body.style.backgroundColor = "green"
        highscore.textContent = randomNumber

    } else if (score === 0) {
        chat('GAME OVER')
        num.textContent = 'GAME OVER'
        document.body.style.backgroundColor = "purple"
    } else {
        chat('Try again')
        document.body.style.backgroundColor = "red"
        num.textContent = '?'
        score--
        Score.textContent = score
    }
}
function againReload() {
    // location.reload()
    Score.textContent = 20
    score = 20
    num.textContent = "?"
    // guess.textContent = 'null'
    document.body.style.backgroundColor = "maroon"
}

btn.addEventListener('click', cheq)
again.addEventListener('click', againReload)





