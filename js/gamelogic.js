//Script for game logic

/**
 * Function for setting/changing state of game
 * @param prevstate: the previous state of the game
 * @attribute turn: the player to move
 * @attribute gameresult: a winner, draw, or in progress
 * @attribute board: 3x3 game board
 */
var State = function(prevstate) {
    
    this.turn = "";
    this.gameresult = "in progress";
    this.board = [];

    //copy the board from previous state if it exists
    if(typeof prevstate !== "undefined") {
        var len = prevstate.board.length;
        this.board = new Array(len);
        for(var i = 0; i < len; i++) {
            this.board[i] = prevstate.board[i];
        }
        this.turn = prevstate.turn;
        this.gameresult = prevstate.gameresult;
    }
}