/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game
let board; //Use an array to represent the squares on the board
let turn; //Use a turn variable to track whose turn it is
let winner; //Use a winner variable to represent three different game states:
// a player that won
// a tie has occured
// or a game that is still in play.
const playerX = 1;
const playerO = -1;
const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
/*------------------------ Cached Element References ------------------------*/
const msgStatus = document.querySelector("#message"); //Store the element that displays the game status on the page
const sq = Array.from(document.querySelectorAll(".sq")) //Store the 9 elements that represent the squares on the page



/*----------------------------- Event Listeners -----------------------------*/
sq.forEach( (square,index) =>{
  square.addEventListener('click', function(evt){
    evt.preventDefault();
    handleClick(index);
    
  });
  }
)


/*-------------------------------- Functions --------------------------------*/
init(); //call an initialize function

function init(){
  board = [null, null, null, null, null, null, null, null, null]; //Initialize the board array to 9 nulls to represent empty squares.
  turn = 1; // player X is 1, player O is -1
  winner = null; //Initialize the winner variable to null, 1 if X wins, -1 if O wins, T if ties
  render();
}

function render(){
  loopStyle();
  renderMsg();  
}

/*----------------------------- Helper Functions ---------------------------*/
function loopStyle(){
  for(i=0; i<board.length; i++){
    if(board[i]===playerX){
      sq[i].textContent='X';
    }else{
      if(board[i]===playerO){
        sq[i].textContent='O';
      }
    }
  }
}

function renderMsg(){
  if(winner === null){ //game is still going
    renderTurn();
  }else{
    if(winner === 'T'){ // game is tie
      msgStatus.textContent = 'The game is a Tie'
    }else{
      if(winner === 1){ // player X has won
        msgStatus.textContent = 'Congratulations! The Winner is Player X'
      }else{
        if(winner === -1){ // player Y has won
          msgStatus.textContent = 'Congratulations! The Winner is Player O'
        }
      }
    }
  }
}

function renderTurn(){ //change the msg to show the current turn while the game is still going
  if(turn === 1){
    msgStatus.textContent = 'The current turn is Player X'
  }else{
    if(turn === -1){
      msgStatus.textContent = 'The current turn is Player O'
    }
  }
}

function handleClick(index){
  if(turn===1){
    sq[index].textContent='X';
    console.log(index);
  }
}


