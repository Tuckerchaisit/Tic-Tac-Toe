/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game
let board; //Use an array to represent the squares on the board
let turn; //Use a turn variable to track whose turn it is
let winner; //Use a winner variable to represent three different game states:
// a player that won
// a tie has occured
// or a game that is still in play.
/*------------------------ Cached Element References ------------------------*/
const msgStatus = document.querySelector("#message"); //Store the element that displays the game status on the page
const sq = Array.from(document.querySelectorAll(".sq")) //Store the 9 elements that represent the squares on the page


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init(); //call an initialize function

function init(){
  board = [null, null, null, null, null, null, null, null, null]; //Initialize the board array to 9 nulls to represent empty squares.
  turn = 1; // player X is 1, player O is -1
  winner = null; //Initialize the winner variable to null, 1 if X wins, -1 if O wins, T if ties
  render();
}

function render(){

}

