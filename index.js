let gameGrid = document.getElementById("game-grid");

const Gameboard = (() => {
    let gameboard = ['','','','','','','','',''];
    gameGrid.style.setProperty('--grid-rows',3);
    gameGrid.style.setProperty('grid-cols', 3);
    for (i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameGrid.appendChild(cell).className = 'board-item'; 
    }
})(); 