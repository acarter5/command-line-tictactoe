var standard_input = process.stdin;
var player = 'x';
var board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
]
var placement;

var rotateBoard = () => {
  var newBoard = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      newBoard[i][j] = board[j][board.length - 1 - i];
    }
  }

  board = newBoard;

  // console.log(board);

  console.log('Roatating...')
  console.log(board[0][0] + '|' + board[0][1] + '|', board[0][2]);
  console.log('-----');
  console.log((board[1][0] + '|' + board[1][1] + '|' + board[1][2]));
  console.log('-----');
  console.log((board[2][0] + '|' + board[2][1] + '|' + board[2][2]));

}

var playerSwap = function() {
  if (player === 'x') {
    player = 'o';
  } else {
    player = 'x';
  }
}

var checkWin = function(player) {
  var win = false;
  if (board[0][0] === player && board[0][1] === player && board[0][2] === player ) {
    win = true;
  } else if(board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    win = true;
  } else if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    win = true;
  } else if (board[0][0] === player && board[1][0] === player && board [2][0] === player) {
    win = true;
  } else if (board[0][1] === player && board[1][1] === player && board [2][1] === player) {
    win = true;
  } else if (board[0][2] === player && board[1][2] === player && board [2][2] === player) {
    win = true;
  } else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    win = true;
  } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    win = true;
  }

  if (win === true) {
    console.log(player + ' has won the game!');
  }
}

console.log(board[0][0] + '|' + board[0][1] + '|', board[0][2]);
console.log('-----');
console.log((board[1][0] + '|' + board[1][1] + '|' + board[1][2]));
console.log('-----');
console.log((board[2][0] + '|' + board[2][1] + '|' + board[2][2]));

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("choose a square");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if (data === 'exit\n'){
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        placement = data.split(',').map(function(stringNum) {
            return Number(stringNum);
        })

        board[placement[0]][placement[1]] = player;

        console.log('You Chose:')

        console.log(board[0][0] + '|' + board[0][1] + '|', board[0][2]);
        console.log('-----');
        console.log((board[1][0] + '|' + board[1][1] + '|' + board[1][2]));
        console.log('-----');
        console.log((board[2][0] + '|' + board[2][1] + '|' + board[2][2]));

        checkWin(player);
        rotateBoard();
        playerSwap();
    }
});