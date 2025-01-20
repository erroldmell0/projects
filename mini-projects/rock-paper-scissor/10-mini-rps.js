//rock paper scissor
let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0
};

updateScoreElement();

function playgame(playerMove) {
    let computerMove = pickComputerMove();
    let result = '';
    console.log(computerMove);

    //determining the result
    if(playerMove==='rock') {
        if(computerMove==='rock') {
            result = 'Tie';
        } else if (computerMove==='paper') {
            result = 'You Loose';
        } else if(computerMove==='scissor') {
            result='You WIN!!';
        }
    } else if(playerMove==='paper') {
        if(computerMove==='rock') {
            result = 'You WIN!!';
        } else if (computerMove==='paper') {
            result = 'Tie';
        } else if(computerMove==='scissor') {
            result='You Loose';
        }
    } else if(playerMove==='scissor') {
        if(computerMove==='rock') {
            result = 'You Loose';
        } else if (computerMove==='paper') {
            result = 'You WIN!!';
        } else if(computerMove==='scissor') {
            result='Tie';
        }
    }

    //updating the score
    if(result==='Tie') {
    score.ties++;
    } else if (result==='You WIN!!') {
    score.wins++;
    } else if( result==='You Loose') {
    score.losses++;
    }

    //storing score in local storage
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('.js-result1').innerText = result;

    //deciding the image to be displayed
    let playerImage;
    let computerImage;
    if(playerMove==='rock') {
        playerImage = '<img src="rock-emoji.png" class="result-image">';
    } else if(playerMove==='paper') {
        playerImage = '<img src="paper-emoji.png" class="result-image">';
    } else if(playerMove==='scissor') {
        playerImage = '<img src="scissors-emoji.png" class="result-image">';
    }
    if(computerMove==='rock') {
        computerImage = '<img src="rock-emoji.png" class="result-image">';
    } else if(computerMove==='paper') {
        computerImage = '<img src="paper-emoji.png" class="result-image">';
    } else if(computerMovef==='scissor') {
        computerImage = '<img src="scissors-emoji.png" class="result-image">';
    }
    document.querySelector('.js-result2').innerHTML = `You ${playerImage}  ${computerImage} Computer`;
    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.js-result3').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

 //reset score 
function resetscore() {
    score.losses =0;
    score.wins=0;
    score.ties=0;
    localStorage.removeItem('score');
    document.querySelector('.js-result3').innerText = `Wins:0, Losses:0, Ties:0`;
}

function pickComputerMove() {
    let computerNumber = Math.random();
    let computerMove = 'rock';
    
    if(computerNumber>=0 && computerNumber<1/3) {
        computerMove = 'rock';
    } else if(computerNumber>=1/3 && computerNumber<2/3) {
        computerMove = 'paper';
    } else if(computerNumber>=2/3 && computerNumber<1) {
        computerMove = 'scissor';
    }
    return computerMove;
} 