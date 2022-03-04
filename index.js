let gameGrid = document.getElementById("game-grid");

const gameBoard = (() => {
    let gameArray = ['','','','','','','','',''];

    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8], //horizontal
        [0,3,6],[1,4,7],[2,5,8], //veritcal
        [0,4,8],[2,4,6]          //diagonal
    ];

    let turn = 1;
    let roundWon = false;

    const displayTurn = (e) => {
        if (turn % 2 == 1 && e.target.innerHTML=='') {
            e.target.innerHTML = 'X';
            gameArray[e.target.id] = 'X';
            checkWin(winningCombos, gameArray);
            turn++;
        }
        else if(turn % 2 == 0 && e.target.innerHTML=='') {
            e.target.innerHTML = 'O';
            gameArray[e.target.id] = 'O';
            checkWin(winningCombos, gameArray);
            turn++;
        }
    }

    const checkWin = (winningCombos, gameArray) => {
        for(i = 0; i < winningCombos.length; i++) {
            const winCon = winningCombos[i];
            let a = gameArray[winCon[0]];
            let b = gameArray[winCon[1]];
            let c = gameArray[winCon[2]];
            if (a === '' || b === '' || c ==='') {
                continue;
            }

            if (a === b && b === c) {
                roundWon = true;
                console.log('Game is won!');
                break;
            }
        }
        checkTie(gameArray, roundWon);
    }

    const checkTie = (gameArray, roundWon) => {
        if (gameArray.every(element => element != '') && roundWon == false) {
            console.log('Tied Game!');
        }
    }

    const createNew = () => {
        for (i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', i);
            gameGrid.appendChild(cell).className = 'board-item';
            cell.addEventListener('click', displayTurn); 
        }
    }
    return {
        createNew,
        gameArray
    }
})(); 



gameBoard.createNew();

const displayController = (() => {
    
})();

const Player = (choice) => {
    
}
