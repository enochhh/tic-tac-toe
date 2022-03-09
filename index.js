const Player = (sign) => {
    this.sign = sign;
    const getSign = () => {
        return sign;
    }
    return {
        getSign
    }
}
const gameBoard = (() => {
    let gameGrid = document.getElementById("game-grid");
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
        clearBoard();
    }

    return {
        createNew,
        markField,
        getField,
        reset
    }
})();

const displayController = (() => {
    let turnMsg = document.getElementById("turn-msg");
    let winMsg = document.getElementById("win-msg");
    let modal = document.getElementById("modal"); 
    let noBtn = document.getElementById("no");
    let yesBtn = document.getElementById("yes");
    
    const setTurnMsg = (msg) => {
        turnMsg.innerHTML = msg; 
    }
    const openModal = () => {
        modal.style.display = "block";
    }
    const closeModal = () => {
        modal.style.display = "none";
    }

    const setWinMsg = (winningSign) => {
        winMsg.innerHTML = `Congrats! ${winningSign} won the game!`;
    }

    const clearUI = () => {
        modal.style.display = "none";
        gameBoard.reset();
        turnMsg.innerHTML = "X's turn";
        gameController.turn = 0;
        console.log("Clear UI's turn: ", gameController.turn);
        console.log("Clear Ui's sign: ", gameController.getCurrPlayerSign());
    }

    noBtn.addEventListener("click", closeModal);
    yesBtn.addEventListener("click", clearUI);
    return {
        setTurnMsg,
        openModal,
        closeModal,
        setWinMsg
    }
})();

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

    const getNextPlayerSign = () => {
        return turn % 2 === 1 ? playerX.getSign() : playerO.getSign();
    }

    const displayTurn = (e) => {
        if (e.target.innerHTML=='') {
            displayController.setTurnMsg(`${getNextPlayerSign()}'s turn`);
            console.log("displayTurn's turn count: ", turn);
            console.log("displayTurn's player sign: ", getCurrPlayerSign());
            e.target.innerHTML = getCurrPlayerSign();
            fieldIdx = e.target.id; 
            gameBoard.markField(fieldIdx, getCurrPlayerSign());
            if (turn < 8) {
                checkWinner();
            }
            else {
                checkWinner();
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
                displayController.setWinMsg(getCurrPlayerSign());
                displayController.openModal(); 
                turn = -1;
                break;
            }
        }  
    };

    return {
        displayTurn,
        getCurrPlayerSign,
        turn
    }
})();

gameBoard.createNew();

