//Script for UI (user interface)


/**
 * Object for user interface attributes and methods
 */
var ui = {};

//TODO: switching turns screen/text

/**
 * Function to place X or O on board
 * @param index (int): position of piece on board
 * @param piece (String): X/O
 */
ui.placepiece = function(index, piece) {
    var board = $(".box");
    var place = $(board[index]);

    if(!place.hasClass("full")) {
        //TODO: place piece
    }
}