//Script for game logic


/**
 * Function for setting/changing state of game
 * @param prevstate: the previous state of the game
 * @attribute turn: the player to move
 * @attribute gameresult: a winner, draw, or in progress
 * @attribute board: 3x3 game board
 * @method changeturn: change turn
 * @method getemptyboxes: return Array of empty boxes
 * @method checkresult: return Boolean depending on gameresult
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

    /**
     * Function to check the game result
     * @return Boolean: true if win or draw, false if in progress
     */
    this.checkresult = function() {
        var boardarray = this.board;
        //row check
        for(var i = 0; i <= 6; i = i + 3) {
            if(boardarray[i] !== " " && boardarray[i] === boardarray[i+1] && boardarray[i] === boardarray[i+2]) {
                this.gameresult = boardarray[i] + " wins"
                return true;
            }
        }
        //col check
        for(var i = 0; i <= 2; i = i + 1) {
            if(boardarray[i] !== " " && boardarray[i] === boardarray[i+3] && boardarray[i] === boardarray[i+6]) {
                this.gameresult = boardarray[i] + " wins"
                return true;
            }
        }
        //diag check
        for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
            if(boardarray[i] !== " " && boardarray[i] === boardarray[i+j] && boardarray[i+j] === boardarray[i+2*j]) {
                this.gameresult = boardarray[i] + " wins";
                return true;
            }
        }
        // //desc diag check
        // if(boardarray[0] !== " " && boardarray[0] === boardarray[4] && boardarray[0] === boardarray[8]) {
        //     this.gameresult = boardarray[0] + " wins"
        //     return true;
        // }
        // //asc diag check
        // if(boardarray[2] !== " " && boardarray[2] === boardarray[4] && boardarray[0] === boardarray[6]) {
        //     this.gameresult = boardarray[2] + " wins"
        //     return true;
        // }
        //check for empty boxes
        var emptyboxes = this.getemptyboxes();
        if(emptyboxes.length == 0) {
            this.gameresult = "draw";
            return true;
        }
        else {
            return false; //in progress
        }
    }

}


