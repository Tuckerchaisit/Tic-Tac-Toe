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
const resetBtn = document.querySelector("#reset-button")



/*----------------------------- Event Listeners -----------------------------*/
sq.forEach( (square,index) =>{
  square.addEventListener('click',() => handleClick(index));
  }
)
resetBtn.addEventListener('click',init);


/*-------------------------------- Functions --------------------------------*/
init(); //call an initialize function

function init(){
  board = [null, null, null, null, null, null, null, null, null]; //Initialize the board array to 9 nulls to represent empty squares.
  resetBtn.setAttribute('hidden',true);
  turn = 1; // player X is 1, player O is -1
  winner = null; //Initialize the winner variable to null, 1 if X wins, -1 if O wins, T if ties
  render();
}

function render(){
  
  loopStyle();
  renderMsg();
    
}

function loopStyle(){
  for(i=0; i<board.length; i++){
    if(board[i]===playerX){
      sq[i].textContent='X';
    }else{
      if(board[i]===playerO){
        sq[i].textContent='O';
      }else{
        sq[i].textContent='';
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
        endTheGame();
      }else{
        if(winner === -1){ // player Y has won
          msgStatus.textContent = 'Congratulations! The Winner is Player O'
          endTheGame();
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

function handleClick(index){ //happen after click that take index of the sq clicked as a parameter
  isGameOver(); //check if there's a winner or tie
  updateBoard(index); //update board upon click
  resetBtn.removeAttribute('hidden'); //show the reset button
  getWinner(); //check if we have winner
  getTie(); //check if we have tie
  changeTurn(); //change the player's turn
  isGameOver(); //check if the game is over, if it's over then prompt the appropriate msg
  render();
}

function changeTurn(){ //alternate the turn
  turn = turn * (-1);
}

function isGameOver(){
  if(winner !== null){  //If winner is not null, immediately return because the game is over.
    renderMsg();
    return;
  }  
}

function updateBoard(index){
  if(board[index]===null){ //check if the board already has the value at the index
    
    if(turn === 1){
      board[index]=1
      //changeTurn();
    }else{
      if(turn === -1){
        board[index]= -1
        //changeTurn();
      }
    }
    render();
  }else{
    changeTurn();//debugged that the current turn is changing when clicked the board with existing value
  }
}

function getWinner(){ //check if we have a winner condition
  for (let i=0; i<8; i++){
    const winCondition = winningConditions[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];
    //console.log(a,b,c)
    if(a === b && b === c && (a !== null && b !== null && c !== null)){
      
      winner = turn;
      return;
    }
  }
}


function getTie(){ //check if the game is a tie
  getWinner(); //make sure that the win condition still work even tho it's the last empty block before win(debugged)
  if(winner!==null){
    return;
  }
  if(!board.includes(null)){
    winner = 'T';
  }
}

function endTheGame(){ //to end the game 
  turn = null;
}
