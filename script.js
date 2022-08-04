

// const board1 = document.getElementsByClassName('pos');
const newBtn = document.querySelector('.newGame');
const restartBtn = document.querySelector('.restart');
const $modalForm = document.querySelector('.modal');
const $exit = document.querySelector('.exit');
// let boardArr = Array.from(board1);
turn = 0;

restartBtn.addEventListener('click', () => {
    gameboard.restart();  
});


// ----------------modal--------------
newBtn.onclick = function() {
    $modalForm.style.display = "block";
};

// closes modal when clicked outside modal window
window.onclick = function(event) {
    if (event.target == $modalForm) {
        $modalForm.style.display = "none";
    }
};

$exit.onclick = () => {
    $modalForm.style.display = "none";
}

// -----------------------------------------



const gameboard = (() => {

    var player = '' ;
    const board1 = document.getElementsByClassName('pos');
    var boardArr = Array.from(board1);


    gameArray = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    const winConditions = [
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
        };
    };

    // clears board display
    const clear = () => {
        const board = document.getElementsByClassName('pos');
        for (let i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
        gameArray[i] = '';
        }
    }
    
    const turnCount = () => {
        if (turn == 0) {
            return turn = 1  
                } else {
                    return turn = 0
                }
            };
    
    const turnRestart = () => {
        return turn = 0;
    }
    
    const restart = () => {
        turnRestart();
        resetValue();
        clear();
    };

    const newGame = () => {
        restart();
    };

    const mark = () => {
        if (turn == 0) {
            player = players[0].marker;
        } else {
             player = players[1].marker;
        } 
    };



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
            } else {
                return
            }
        });
    });
    
    return {gameEvent, mark, players, 
        gameArray, populateBoard, boardArr, 
        resetValue, turnCount, turnRestart, 
        restart, newGame, clear}
})();
