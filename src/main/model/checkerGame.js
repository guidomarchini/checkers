require('./board');
require('./commons')


/**
 * Checker game representation.
 * It contains a board, the current checkers on the board and the current turn.
 */
function CheckerGame() {
    this.board = new Board();
    this.checkers = this.board.initializeCheckers();
    this.turn = WHITE
}
/**
 * Moves the checker from the given coordinates into another coordinates
 */
CheckerGame.prototype.moveChecker = function(
    xPositionFrom,
    yPositionFrom,
    xPositionTo,
    yPositionTo
) {
    if (this.board.checkerAt(xPositionFrom, yPositionFrom).color !== this.turn) {
        throw "Not that color's turn!"
    }

    // move checker, removing eated ones
    const eatenCheckers =
        this.board.moveChecker(xPositionFrom, yPositionFrom, xPositionTo, yPositionTo);

    // change the turn
    this.turn = nextTurn[this.turn]

    // remove checkers from the list
    eatenCheckers.forEach(eatenChecker =>
        this.checkers[this.turn].splice(eatenChecker, 1)
    );
};

// turn switchs
const nextTurn = {
    WHITE: BLACK,
    BLACK: WHITE
};