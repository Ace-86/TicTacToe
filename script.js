const gameboard = (() => {
    const gameArray = [
        'X', '', 'X',
        '', 'X', 'X',
        '', '', 'X'
    ];

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

    const player = () => {
        
    };
    
    const placemarker = () => {

    };


    return {gameArray, populateBoard, boardArr, clearBoard}
})();




