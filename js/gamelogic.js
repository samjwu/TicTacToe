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

    /**
     * Function to change the turn
     */
    this.changeturn = function() {
        //https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons
        //https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript
        this.turn = this.turn === "X" ? "O" : "X";
    }

    /**
     * Function that returns an array of the empty boxes
     * @return emptyboxes (Array): zero-indexed array of empty boxes
     */
    this.getemptyboxes = function() {
        var emptyboxes = [];
        for(var i = 0; i < 9; i++) {
            if(this.board[i] === " ") {
                emptyboxes.push(i);
            }
        }
        return emptyboxes;
    }

}