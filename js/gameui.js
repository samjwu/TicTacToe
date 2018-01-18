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

    //https://api.jquery.com/hasclass/
    if(!place.hasClass("full")) {
        //https://www.w3schools.com/jquery/html_html.asp
        place.html(piece);
        //https://www.w3schools.com/jquery/css_css.asp
        place.css({
            color : piece == "X"? "blue" : "red"
        });
        //https://www.w3schools.com/jquery/html_addclass.asp
        place.addClass("full");
    }
}