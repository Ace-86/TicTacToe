

const board1 = document.getElementsByClassName('pos');
const newBtn = document.querySelector('.newGame');
const restartBtn = document.querySelector('.restart');
let boardArr = Array.from(board1);

newBtn.addEventListener('click', () => {
    gameboard.newGame();
});

restartBtn.addEventListener('click', () => {
    gameboard.restart();
});


boardArr.forEach((pos) => {
    pos.addEventListener('click', () => {
        gameboard.gameArray;
        gameboard.mark();
        gameboard.populateBoard();
        console.log('hey');
    });
});



// ---------------on click event--------------------


const gameboard = (() => {
    const gameArray = [
        'X', '', 'X',
        '', 'X', 'X',
        '', '', 'X'
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
        marker: 'O'},
        {player: 2,
        marker: 'X'}
    ];



    turn = 0;
    // populate board with boardArray
    const populateBoard = () => {
        const board = document.getElementsByClassName('pos');
        for (let i = 0; i < board.length; i++)
        board[i].innerHTML = gameArray[i];
    };

    const boardArr = () => {
        const solodiv = document.querySelector('#border3')
        const displayArray = document.querySelectorAll('#border3');
        let boardArray = Array.from(displayArray);
        console.log(boardArray);
        };

    const clearBoard = () => {
        const board = document.getElementsByClassName('pos');
        for (let i = 0; i < board.length; i++)
        board[i].innerHTML = "";
    };
    
    const turnCount = () => {
        return round++;
    }
    
    const turnRestart = () => {
        return turn = 0;
    }
    
    const restart = () => {
        turnRestart();
        clearBoard();       
    };

    const newGame = () => {
        restart();
        // open modal
    };

    const mark = () => {
        gameArray[2] = players[1].marker;
        console.log(gameArray);
    };



    return {mark, players, gameArray, populateBoard, boardArr, clearBoard, turnCount, turnRestart, restart, newGame}
})();




