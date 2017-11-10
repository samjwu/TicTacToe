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
    controls.Rungame = new Rungame();
});

/**
 * Function to place markers/pieces on board
 */
$(".box").each(function() {
    //http://api.jquery.com/jquery.each/
});