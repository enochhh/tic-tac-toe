let gameGrid = document.getElementById("game-grid");
let turn = 1;
const gameBoard = (() => {
    let gameboard = ['','','','','','','','',''];
    const createNew = () => {
        for (i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gameGrid.appendChild(cell).className = 'board-item';
            cell.addEventListener('click', displayTurn); 
        }
    }
    return {
        createNew,
    }
})(); 

gameBoard.createNew();

function displayTurn(e) {
        if (turn % 2 == 1 && e.target.innerHTML=='') {
            e.target.innerHTML = 'x';
            turn++;
        }
        else if(turn % 2 == 0 && e.target.innerHTML=='') {
            e.target.innerHTML = 'o';
            turn++;
        }
}

const gameController = (() => {

})();

const Player = (choice) => {
    
}
