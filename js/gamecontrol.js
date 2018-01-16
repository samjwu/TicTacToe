//Script for game controls

/**
 * Object for game control functions
 */
var controls = {};

/**
 * Function to start game on click
 */
$(".start").click(function() {
    //https://stackoverflow.com/questions/2539205/javascript-inline-function-vs-predefined-functions
    //http://kangax.github.io/nfe/
    //https://api.jquery.com/click/
    controls.rungame = new Rungame();
    controls.rungame.start();
});

/**
 * Function to allow player to click to place markers/pieces on board
 */
$(".box").each(function() {
    //http://api.jquery.com/jquery.each/
    var thisbox = $(this);
    //https://www.w3schools.com/jquery/jquery_selectors.asp
    //https://stackoverflow.com/questions/8667736/what-does-the-sign-mean-in-jquery-or-javascript
    thisbox.click(function() {
        if(controls.rungame.running == "yes" && controls.rungame.currstate.turn == === "X" && !$this.hasClass('occupied')) {
            var index = parseInt($this.data("index"));
            var nextstate = new State(controls.rungame.currstate);
            nextstate.board[index] = "X";
            //TODO: put x on screen
            nextstate.changeturn();
            controls.rungame.changestate(nextstate);
        }
    })
});