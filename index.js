let gameGrid = document.getElementById("game-grid");

const gameBoard = (() => {
    let gameArray = ['','','','','','','','',''];
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8], //horizontal
        [0,3,6],[1,4,7],[2,5,8], //veritcal
        [0,4,8],[2,4,6]          //diagonal
    ];
    let turn = 1;
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
        let roundWon = false;
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
    }

/*
    ['', '', '', '', '', '', '', '', ''] 
    you can check against a predefined set of win cons 

    but how do you get the correct array index checked off using the id
        *maybe inside displayturn we can do somethiing like array[e.target.id] = choice?????
        *i guess easiest way is to just iterate through all the winning combos and compare it with game array and check if 
        all symbols are the same in that array
*/ 

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

/*
const createBoard  = (n) => {
    return [...Array(n)].map((row) => Array(n).fill(null));
}

const isHorizontalWin = (symbol, board) => {
    return board.some((moves) => moves.every((move) => move === symbol));
}

const transposeBoard = (board) => {
    return board.map((_, index) => board.map((row) => row[index]));
}

const isVerticalWin = (symbol, board) => {
    return transposeBoard(board).some((moves) => moves.every((move) => move === symbol));
}


const getDiagonalMoves = (board) => {
    const diagonalMoves = [];
    const equalBasedDiag = [] // i === j 
    const sumBasedDiag = [] //i + j == n - 1

    // Check left to right diag (equaalBasedDiag)
    for (row = 0; row < board.length; row++) {
        for (col = 0; col < board.length; col++) {
            if (row == col) {
                equalBasedDiag.push(board[row][col])
            }
        }
    }

    for (row = 0; row < board.length; row++) {
        for (col = 0; col < board.length; col++) {
            if (row + col === board.length-1) {
                sumBasedDiag.push(board[row][col]);
            }
        }
    }

    diagonalMoves.push(equalBasedDiag, sumBasedDiag); 
    return diagonalMoves;
}

const isDiagonalWin = (symbol, board) =>  {
    return getDiagonalMoves(board).some((moves) => moves.every((move) => move === symbol));
}

const isWinner = (symbol, board) => isHorizontalWin(symbol,board) || isVerticalWin(symbol,board) || isDiagonalWin(symbol, board);

const isGameOver = (board) => board.every((row) => row.every((move) => !!move));

const play = ([row,col], symbol) => {
    if (isGameOver(board)) {
        console.log('Game over!');
        return;
    }
    if (board[row][col]) {

    }
}

*/

const displayController = (() => {
    
})();

const Player = (choice) => {
    
}
