let gameGrid = document.getElementById("game-grid");

const Player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    }
    return {
        getSign
    }
}

const gameController = (() => {
    const playerX = Player('X');
    const playerO = Player('O');
    let turn = 0;
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

    const getCurrPlayerSign = () => {
        return turn % 2 === 1 ? playerO.getSign() : playerX.getSign(); 
    }

    const displayTurn = (e) => {
        if (e.target.innerHTML=='') {
            e.target.innerHTML = getCurrPlayerSign();
            fieldIdx = e.target.id; 
            gameBoard.markField(fieldIdx, getCurrPlayerSign());
            if (turn < 8) {
                checkWinner();
            }
            else {
                console.log("it's a draw");
            }
            turn++;
        }
    }

    const checkWinner = () => {
        for (i = 0; i < 8; i++) {
            const winCon = winConditions[i];
            let a = gameBoard.getField(winCon[0]);
            let b = gameBoard.getField(winCon[1]);
            let c = gameBoard.getField(winCon[2]);
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                console.log("GAME WON");
                setTimeout(gameBoard.reset,5000);    
                break
            }
        }  
    };

    return {
        displayTurn
    }
})();



const gameBoard = (() => {
    let gameArray = ['','','','','','','','',''];
    
    const createNew = () => {
        for (i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('id', i);
            gameGrid.appendChild(cell).className = 'board-item';
            cell.addEventListener('click', gameController.displayTurn); 
        }
    }

    const markField = (fieldIdx, sign) => {
        gameArray[fieldIdx] = sign;
    }

    const getField = (fieldIdx) => {
        return gameArray[fieldIdx];
    }

    const clearBoard = () => {
        let gridItem = document.querySelectorAll(".board-item");
        gridItem.forEach(item => {
            item.innerHTML = '';
        })
    }

    const reset = () => {
        gameArray.fill('');
        console.log(gameArray);
        clearBoard();
    }

    return {
        createNew,
        markField,
        getField,
        reset
    }
})();



gameBoard.createNew();

