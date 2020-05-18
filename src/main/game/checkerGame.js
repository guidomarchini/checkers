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
    this.currentTurn = null;
};
/**
 * Creates a new game.
 * Delegates the checker creation to the board,
 * Default first turn is for White checkers.
 */
CheckerGame.prototype.newGame = function(){
    this.checkers = this.board.initializeCheckers();
    this.currentTurn = WHITE;
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
    this.currentTurn = currentTurn;
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
    if (this.board.checkerAt(xPositionFrom, yPositionFrom).color !== this.currentTurn) {
        throw "Not that color's turn!"
    }

    // move checker, removing eated ones
    const eatenCheckers =
        this.board.moveChecker(xPositionFrom, yPositionFrom, xPositionTo, yPositionTo);

    // change the turn
    this.currentTurn = nextTurn[this.currentTurn];

    // remove checkers from the list
    if (eatenCheckers && eatenCheckers.length !== 0) {
        this.checkers[this.currentTurn] = this.checkers[this.currentTurn]
            .filter(function(value) {
                return !eatenCheckers.includes(value);
        } )
    }
};

// turn switchs
const nextTurn = [];
nextTurn[WHITE] = BLACK;
nextTurn[BLACK] = WHITE;