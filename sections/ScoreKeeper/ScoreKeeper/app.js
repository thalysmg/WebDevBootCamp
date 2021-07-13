const playTo = document.querySelector('#playTo');
let pointsToWin = 3;
let gameOver = false;

playTo.addEventListener('change', function() {
    pointsToWin = +this.value;
    playTo.disabled = true;
});

const p1 = {
    score: 0,
    display: document.querySelector('#scoreP1'),
    button: document.querySelector('#p1Btn') 
}
const p2 = {
    score: 0,
    display: document.querySelector('#scoreP2'),
    button: document.querySelector('#p2Btn')
}

p1.button.addEventListener('click', function() {
    if (!playTo.disabled) playTo.disabled = true;
    incrementPoint(p1, p2);
});

p2.button.addEventListener('click', function() {
    if (!playTo.disabled) playTo.disabled = true;
    incrementPoint(p2, p1);
});

function incrementPoint(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        player.display.innerHTML = player.score;
        
        if (player.score === pointsToWin) {
            gameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.classList.add('text-success');
            opponent.display.classList.add('text-danger');
        }
    }
}

document.querySelector('#rstBt').addEventListener('click', function() {
    playTo.disabled = false;
    gameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('text-success', 'text-danger');
        p.button.disabled = false;
    }
});