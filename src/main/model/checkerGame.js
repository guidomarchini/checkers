require('./board');
require('./../commons');


/**
 * Checker game representation.
 * It contains a board, the current checkers on the board and the current turn.
 */
global.CheckerGame = function() {
    this.board = new Board();
    this.checkers = [];
    this.checkers[WHITE] = [];
    this.checkers[BLACK] = [];
    this.turn = null
};
/**
 * Creates a new game.
 * Delegates the checker creation to the board,
 * Default first turn is for White checkers.
 */
CheckerGame.prototype.newGame = function(){
    this.checkers = this.board.initializeCheckers();
    this.turn = WHITE;
    return this;
};
/**
 * Loads a game for given checkers and turn.
 */
CheckerGame.prototype.loadGame = function(checkers, currentTurn) {
    checkers.forEach(checker => {
        this.checkers[checker.color].push(checker)
    });
    this.board.placeCheckers(checkers);
    this.turn = currentTurn;
    return this;
};
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
    this.turn = nextTurn[this.turn];

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