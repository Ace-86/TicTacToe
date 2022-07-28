const gameboard = (() => {
    const boardStatus = [
        'x', 'x', 'x',
        'x', 'x', 'x',
        'x', 'x', 'x'
    ];

    const position = () => {

    }
    const player = () => {
        
    }
    
    const marker = () => {

    }
    const board = () => {
        const displayArray = document.querySelectorAll('#border3');
        let boardArray = Array.from(displayArray);
        boardArray.forEach((position) => {
            
        })
         console.log(boardArray);
    };
    
    return {boardStatus, board}
})();

function deleteCardEvent() {
    const removeButtons = document.querySelectorAll('.removeBtn');
    let removeArray = Array.from(removeButtons);
    removeArray.forEach((button) => {
        button.addEventListener('click', () => {
            library.splice(removeArray.indexOf(button), 1);
            createCard();
        });
    }); 
};




