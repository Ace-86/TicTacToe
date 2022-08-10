const modalFunct = (() => {    

    const newBtn = document.querySelector('.newGame');
    const restartBtn = document.querySelector('.restart');
    const $modalForm = document.querySelector('.modal');
    const $exit = document.querySelector('.exit');
    
    const reset = restartBtn.addEventListener('click', () => {
            gameboard.restart();
        });
    
        // ----------------modal--------------
    const modalNew = newBtn.onclick = function() {
            gameboard.restart();
            gameDisplay.resetName();
            gameboard.scoreDisplay();
            gameboard.playerScores();
            $modalForm.style.display = "block";
        }
    
        // closes modal when clicked outside modal window
    const exit1 = window.onclick = function(event) {
            if (event.target == $modalForm) {
                $modalForm.style.display = "none";
            }
        }

    const exit2 = $exit.onclick = () => {
            $modalForm.style.display = "none";
        };

    return {modalNew, exit1, exit2, reset};
    })
();



const gameboard = (() => {

    turn = 0;
    turnCounter = 0;
    round = 1;
    roundWon= false;
    playerWon = 0;
    playerScore = 0;
    oppScore = 0;
    
    var player = '';
    const board1 = document.getElementsByClassName('pos');
    var boardArr = Array.from(board1);

    gameArray = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    const players = [{
        player: 1,
        marker: 'X',
        name: ""},
        {player: 2,
        marker: 'O',
        name: ""}
        ];
        
    // populate board with boardArray
    const populateBoard = () => {
        const board = document.getElementsByClassName('pos');
        for (let i = 0; i < board.length; i++)
        board[i].innerHTML = gameArray[i];
    };
    
    // resets div.pos value back to true
    const resetValue = () => {
        const board = document.getElementsByClassName('pos');
        for (let i = 0; i < board.length; i++) {
            board[i].setAttribute('value', true);
        }
    };
    
    const falsyValue = () => {
        const board = document.getElementsByClassName('pos');
        for (let i = 0; i < board.length; i++) {
            board[i].setAttribute('value', falsyValue);
        }
    };
    // clears board display
    const clear = () => {
        const board = document.getElementsByClassName('pos');
        for (let i = 0; i < board.length; i++) {
            board[i].innerHTML = "";
            gameArray[i] = '';
        }
    };
    
    // ---------turn control---------
    const turnCount = () => {
        if (turn == 0) {
            return turn = 1  
        } else {
            return turn = 0
        }
    };
    
    const turnRestart = () => {
        return turn = 0;
    };
    // ------------------------------
    
    const scoreReset = () => {
        oppScore = 0;
        playerScore = 0;
    }


    // resets game turn, board values and empties innerHTML
    const restart = () => {
        turnRestart();
        resetValue();
        clear();
        turnCounter = 0;
        roundWon = false;
        scoreDisplay();
    };
    
    // players marker switches every turn, starting with player 1 (turn 0)
    const mark = () => {
        if (turn == 0) {
            player = players[1].marker;
        } else {
            player = players[0].marker;
        } 
    };
    
    const tieGame = () => {
        if( turnCounter == 9 && roundWon == false) {
            console.log('tie game');
            playerWon = 3;
            gameDisplay.gameMessage();
        }
    }
   
    const playerScores = () => {
        const p1score = document.querySelector('.p1-display');
        const p2score = document.querySelector('.p2-display');
        const playerInfo = `
        <h3>Name: ${gameboard.players[0].name}  </h3>
        <p class=score1> Score: ${playerScore}</p>
        <p class=marker> Sign: X </p>
        `
        const oppInfo = `
        <h3>Name: ${gameboard.players[1].name}  </h3>
        <p class = score2>Score: ${oppScore} </p>
        <p class= makrker> Sign: O </p>
        `
        p1score.innerHTML = playerInfo;
        p2score.innerHTML = oppInfo;
   }

    const scoreDisplay = () => {
        const displayScore = document.querySelector('.score-display');
        const roundDisplay = document.createElement('div')
        const roundInfo = `
        <p class= round> Round: ${round} </p>
        <p class= turn> Turn: ${turnCounter}</p> `
        displayScore.innerHTML = roundInfo;        
    }

    clearDisplay = () => {
        const displayScore = document.querySelector('.score-display');
        displayScore.removeChild(displayScore.firstChild)
    }

    outcomeMessage = () => {
       if (roundWon = true) {
        gameDisplay.gameMessage();
       }
    }

    const verifyWin = () => {
        turnCounter++;
        roundWon = false;
        for(let i = 0; i <= 7; i++) {
            const winCheck = winCondition[i];
            let win1 = gameArray[winCheck[0]];
            let win2 = gameArray[winCheck[1]];
            let win3 = gameArray[winCheck[2]];
            
            if (win1 === '' || win2 === '' || win3 === '') {
                console.log('no winnner');
                continue;
            }
            if (win1 === win2 && win2 === win3) {
                roundWon = true;
                falsyValue();
                console.log(win1, win2, win3)
                console.log('winner');
                round++;
                if (win1 === 'X') {
                    playerScore++;
                    playerWon = 1;
                    outcomeMessage();
                    console.log('X wins')
                } else {
                    oppScore++;
                    playerWon = 2;
                    outcomeMessage();
                    console.log('O wins')
                }
                break
            }
        }
    }

// board onclick event triggers player marking board
const gameEvent = boardArr.forEach((pos) => {
    pos.addEventListener('click', () => { 
        if (pos.getAttribute('value') == 'true') {
            gameboard.turnCount();
            gameboard.mark();
            gameArray.splice(boardArr.indexOf(pos), 1, player);  
            gameboard.populateBoard();
            pos.setAttribute('value', false); 
            gameboard.verifyWin();
            gameboard.tieGame();
            scoreDisplay();
            playerScores();
        } else {
            return
        }
    })
});

return {gameEvent, mark, players, 
    gameArray, populateBoard, boardArr, 
    resetValue, turnCount, turnRestart, 
    restart, clear, verifyWin, tieGame, 
    round, turnCounter, scoreDisplay,
    playerScores, outcomeMessage, scoreReset, playerWon}
})
();

const gameDisplay = (() => {
    
    const newGame = document.querySelector('.startBtn');
    const $modalForm = document.querySelector('.modal');
    const playerNames = document.querySelector('.playerName');
    const oppNames = document.querySelector('.opponentName');
    const outcome = document.querySelector('.modal2');
    const outcomeDisplay = document.querySelector('.messageBox');
    const contBtn = document.querySelector('.continue');

    newGame.addEventListener('click', () => {
        round = 1;
        gameboard.restart();
        gameboard.scoreReset()
        setName();
        gameboard.scoreDisplay();
        gameboard.playerScores();
        newExit();
    })

    const setName = () => {
        gameboard.players[0].name = playerNames.value;
        gameboard.players[1].name = oppNames.value;
    }

    const resetName = () => {
        gameboard.players[0].name = "";
        gameboard.players[1].name = "";
        playerNames.value = "";
        oppNames.value = "";
    }

    const newExit = () => {
        $modalForm.style.display = "none";
    }

    // ----on window, game window, lose or tie displays---
    const gameMessage = () => {
        const outcomeBox = document.createElement('div');
        const continueBtn = document.createElement('button')
        continueBtn.classList.add('continue2');
        continueBtn.textContent = 'CONTINUE';
       
        if ( playerWon === 1) {
        const winMessage = `<p> Player 1 wins</p>
        `
        outcomeBox.innerHTML = winMessage;
        outcomeDisplay.appendChild(outcomeBox);
        outcomeBox.appendChild(continueBtn);
        contExit();
        } else if ( playerWon === 2) {
        const winMessage = `<p> Player 2 Wins </p>
`
        outcomeBox.innerHTML = winMessage;
        outcomeDisplay.appendChild(outcomeBox);
        outcomeBox.appendChild(continueBtn);
        contExit();
        } else if ( playerWon === 3) {
        const winMessage = `<p> Tie Game </p>
                `
                outcomeBox.innerHTML = winMessage;
                outcomeDisplay.appendChild(outcomeBox);
                outcomeBox.appendChild(continueBtn);
                contExit();
        } 
        outcome.style.display = "block"
    }

    // ---continue button exits modal---
    const contExit = () => {
        if ( playerWon !== 0) {
        const contBtn = document.querySelector('.continue2');
        contBtn.addEventListener('click', () => {
            outcome.style.display = "none"   
            outcomeDisplay.innerHTML = "";
            gameboard.restart();
 })
}
}

    return {newGame, setName, resetName, newExit, gameMessage, contExit}
})();

