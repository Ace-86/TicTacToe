
// turn = 0;
// turnCounter = 0;
// round = 0;
// roundWon= false;

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
    round = 0;
    roundWon= false;
    playerScore = 0;
    oppScore = 0;
    
    var player = '' ;
    const board1 = document.getElementsByClassName('pos');
    var boardArr = Array.from(board1);
    // roundWon = true;
    
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
        marker: 'X'},
        {player: 2,
            marker: 'O'}
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
            
        }
    }
   
    const scoreDisplay = () => {
        clearDisplay();
        const displayScore = document.querySelector('.score-display');
        const roundDisplay = document.createElement('div')
        const roundInfo = `
        <p class= round> ${round} </p>
        <p class= turn> Turn : ${turnCounter}</p>`
        roundDisplay.innerHTML = roundInfo;        
        displayScore.appendChild(roundDisplay)
    }

    clearDisplay = () => {
        const displayScore = document.querySelector('.score-display');

        displayScore.removeChild(displayScore.firstChild)
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
                    console.log('X wins')
                } else {
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
            gameboard.gameArray;
            gameboard.players;
            gameboard.turnCount();
            gameboard.mark();
            gameArray.splice(boardArr.indexOf(pos), 1, player);  
            gameboard.populateBoard();
            pos.setAttribute('value', false); 
            gameboard.verifyWin();
            gameboard.tieGame();
            scoreDisplay();
        } else {
            return
        }
    })
});

return {gameEvent, mark, players, 
    gameArray, populateBoard, boardArr, 
    resetValue, turnCount, turnRestart, 
    restart, clear, verifyWin, tieGame, round, turnCounter, scoreDisplay}
})
();

// const scoreDisplay = (() => {
//     const displayScore = document.querySelector('.score-display');
//     const roundDisplay = document.createElement('div')
//     const roundInfo = `
//     <p class= round>Round: ${round}</p>
//     <p class= turn> Turn : ${turnCounter}</p>
//     `
//    roundDisplay.innerHTML = roundInfo;        
  
//     displayScore.appendChild(roundDisplay)
// })();


// const cardContainer = `<div class="card-container" data-index=${i}>
// <p class='titles'>Book Title: ${book.title}</p>
// <p >Book Author: ${book.author}</p>
// <p>Total Pages: ${book.page}</p>

// </div>`
// const elementdiv = document.createElement('div');
// elementdiv.className = 'contain1';
// const removeButton = document.createElement('button');
// removeButton.className = 'removeBtn';
// removeButton.textContent = 'X';
// elementdiv.innerHTML= cardContainer;
// $card.appendChild(elementdiv);