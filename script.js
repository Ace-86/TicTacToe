

const board1 = document.getElementsByClassName('pos');
const newBtn = document.querySelector('.newGame');
const restartBtn = document.querySelector('.restart');
const $modalForm = document.querySelector('.modal');
const $exit = document.querySelector('.exit');
let boardArr = Array.from(board1);
 
turn = 0;

newBtn.addEventListener('click', () => {
    gameboard.newGame();
});

restartBtn.addEventListener('click', () => {
    gameboard.restart();
});


boardArr.forEach((pos) => {
    pos.addEventListener('click', () => {
        
        gameboard.gameArray;
        gameboard.players;
        gameboard.turnCount();
        gameboard.mark();
        gameboard.populateBoard();
        // console.log(turn)
    });
});

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
        gameArray[2] = players[1].marker;
        } else {
            gameArray[2] = players[0].marker;
        } 
        
    };



    return {mark, players, gameArray, populateBoard, boardArr, clearBoard, turnCount, turnRestart, restart, newGame}
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

