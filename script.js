

// ----------- on click event-----------
// const position = document.querySelector('.pos')
const board1 = document.getElementsByClassName('pos');
let boardArr = Array.from(board1);
// const gameArray = [
//     'X', '', 'X',
//     '', 'X', 'X',
//     '', '', 'X'
// ];


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
    
    // const placemarker = () => {
    //     const board = document.getElementsByClassName('pos');
    //     let boardArr = Array.from(board);
    //     boardArr.forEach((pos) => {
    //         pos.addEventListener('click', () => {
    //             board.innerHTML = "O";
    //         });
    // //     });
    // };


    return {gameArray, populateBoard, boardArr, clearBoard}
})();




