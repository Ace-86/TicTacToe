

// const board1 = document.getElementsByClassName('pos');
const newBtn = document.querySelector('.newGame');
const restartBtn = document.querySelector('.restart');
const $modalForm = document.querySelector('.modal');
const $exit = document.querySelector('.exit');
// let boardArr = Array.from(board1);
turn = 0;

newBtn.addEventListener('click', () => {
    gameboard.newGame();
});

restartBtn.addEventListener('click', () => {
    gameboard.restart();
});


// boardArr.forEach((pos) => {
//     pos.addEventListener('click', () => {      
//         gameboard.gameArray;
//         gameboard.players;
//         gameboard.turnCount();
//         gameArray.splice(boardArr.indexOf(pos), 1, 'O');  
//         // for (i = 0; i < boardArr.length; i++)
//             // boardArr[3] = 8;

//         // gameboard.mark(i);
//         // gameboard.populateBoard();
//         console.log(pos)
        

//     });
// });

// ---------------on click event--------------------


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


    const gameArray = [
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

    const boardArrs = () => {
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
        clearBoard();       
    };

    const newGame = () => {
        restart();
        // open modal
    };

    const mark = () => {
        if (turn == 0) {
            player = players[0].marker;
        } else {
             player = players[1].marker;
        } 
        
    };



    const front = boardArr.forEach((pos) => {
        pos.addEventListener('click', () => { 
            if (pos.getAttribute('value') == 'true') {
            pos.setAttribute('value', false); 
            gameboard.gameArray;
            gameboard.players;
            gameboard.turnCount();
            gameboard.mark();
            gameArray.splice(boardArr.indexOf(pos), 1, player);  
            gameboard.populateBoard();
            // value = false;
            console.log(board1.value);
            console.log(player);
            console.log(pos.getAttribute('value',)); 
            } else {
                return
            }
    
        });
    });
    

    return {front, boardArrs, mark, players, gameArray, populateBoard, boardArr, clearBoard, turnCount, turnRestart, restart, newGame}
})();











        // function deleteCardEvent() {
        //     const removeButtons = document.querySelectorAll('.removeBtn');
        //     let removeArray = Array.from(removeButtons);
        //     removeArray.forEach((button) => {
        //         button.addEventListener('click', () => {
        //             library.splice(removeArray.indexOf(button), 1);
        //             createCard();
        //             console.log(removeArray)
        //         });
        //     }); 
        // };


        // function statusCarEvents(){                                      
        //     const statusButtons = document.querySelectorAll('.stat')
        //     let statusArray = Array.from(statusButtons)
        //     statusArray.forEach((button) => {
        //         button.addEventListener('click', () => {
        //                 library[statusArray.indexOf(button)].status = 
        //                 !(library[statusArray.indexOf(button)].status)
        //                 createCard();
        //         });
                
        //     });

