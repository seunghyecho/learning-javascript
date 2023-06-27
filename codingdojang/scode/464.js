/**
 * tic-tac-toe game
 * https://codingdojang.com/scode/464
 */

let board = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
let marker = ['X', 'O'];
let player = 1;

function printBoard() {
    for (let i of board) {
        console.log('| ' + i.join(' | ') + ' |');
    }
    console.log('==============')
}

function checkWinner() {
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        return board[0][0]
    } else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
        return board[0][2]
    } else {
        for (let i = 0; i < 3; i++) {
            if (new Set([board[0][i], board[1][i], board[2][i]]).size == 1) {
                return board[0][i]
            } else if (new Set([board[i][0], board[i][1], board[i][2]]).size == 1) {
                return board[i][0]
            }
        }
    }
    if (new Set(board.flat()).size == 2) {
        return 'Draw';
    }
    return false;
}

function solution() {
    let userInput = window.prompt();
    let pos = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === userInput) {
                pos = [i, j]
            }
        }
    }
    if (pos.length === 2) {
        board[pos[0]][pos[1]] = marker[player]
        printBoard()
    }

    let ch = checkWinner();
    if (ch) {
        if (ch === 'Draw') {
            console.log('비김')
        } else {
            console.log(ch, '이김')
        }
        return false;
    }
    return true;
}

while (solution()) {
    player ^= 1;
}