

const board1 = document.getElementsByClassName('pos');
let boardArr = Array.from(board1);


boardArr.forEach((pos) => {
    pos.addEventListener('click', () => {
        gameboard.gameArray;
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

    round = 0;
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
    
    const roundCount = () => {
        return round++;
    }
    
    const roundRestart = () => {
        return round = 0;
    }
    
    const restart = () => {
        roundRestart();
        clearBoard();       
    };

    const newGame = () => {
        restart();
        // open modal
    }

    return {gameArray, populateBoard, boardArr, clearBoard, roundCount, roundRestart, restart, newGame}
})();




