/*
 Is it there an import in js?
 Big TODO here: move 'classes' to packages
 */

// Global variables
// colors
const WHITE = "white";
const BLACK = "black";

// turn switchs
const nextTurn = {
    "white": "black",
    "black": "white"
};

/**
 * Checker game representation.
 * It contains a board, the current checkers on the board and the current turn.
 */
function CheckerGame() {
    this.board = new Board();
    this.checkers = board.initializeCheckers();
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






/**
 * Check representation.
 * Knows its color and its board position.
 */
function Checker(
    color,
    xPosition,
    yPosition
) {
    this.color = color;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
}


/**
 * Represents the checker board.
 * It contains information about how the checks are in the board.
 */
function Board() {
    this.boardSize = 10;

    this.board = [];
    for(let i=0; i<this.boardSize; i++) {
        this.board[i] = new Array(this.boardSize);
    }
}
/**
 * Returns the check by the given position
 */
Board.prototype.checkerAt = function(
    xPosition,
    yPosition
) {
    return this.board[xPosition][yPosition]
};
/**
 * Initializes the checker board.
 * By the end of it, returns the checks that were created
 */
Board.prototype.initializeCheckers = function() {
    const self = this;
    const checkers = {
        WHITE: [],
        BLACK: []
    };

    function addInRows(color, yPosition, modFunction) {
        for(let xIndex = 0;
            xIndex < self.boardSize && modFunction(xIndex);
            xIndex++) {

            const check = new Checker(color, xIndex, yPosition);
            self.board[xIndex][yPosition] = check;
            checkers[color].push(check)
        }
    }

    // first three rows are white checks
    addInRows(WHITE, 0, (xIndex) => xIndex % 2 === 0);
    addInRows(WHITE, 1, (xIndex) => xIndex % 2 === 1);
    addInRows(WHITE, 2, (xIndex) => xIndex % 2 === 0);

    // rows 8, 9 and 10 are black checks
    addInRows(BLACK, 7, (xIndex) => xIndex % 2 === 1);
    addInRows(BLACK, 8, (xIndex) => xIndex % 2 === 0);
    addInRows(BLACK, 9, (xIndex) => xIndex % 2 === 1);

    return checkers
};
/**
 * Moves the checker in the given position to a given coordinate.
 * Returns the list of the eaten checkers
 */
Board.prototype.moveChecker = function(
    xPositionFrom,
    yPositionFrom,
    xPositionTo,
    yPositionTo
) {

    // arrange
    const checker = this.checkerAt(xPositionFrom, yPositionFrom)

    const xRange = numberRange(xPositionFrom, xPositionTo);
    const yRange = numberRange(yPositionFrom, yPositionTo);

    // diagonal movement means same range length
    if (xRange.length !== yRange.length) {
        throw "Invalid movement";
    }
    if (this.checkerAt(xPositionTo, yPositionTo) !== null) {
        throw "There's a checker in that cell!";
    }

    const eatenCheckers = []

    // gather eaten checkers
    let currentCell = null;
    for (let rangeIndex = 0; rangeIndex < xRange.length; rangeIndex++) {
        const yPosition = yRange[rangeIndex]
        const xPosition = xRange[rangeIndex]

        currentCell = this.checkerAt(xPosition, yPosition);
        if (currentCell !== null) {
            // there's a checker!
            if (currentCell.color === checker.color) {
                throw "Can't move over a checker with the same color!"
            } else {
                eatenCheckers.push(currentCell)
            }
        }
    }

    // update the board
    eatenCheckers.forEach(checkerToDelete => {
        this.board[checkerToDelete.xPosition][checkerToDelete.yPosition] = null;
    });
    this.board[checker.xPosition][checker.yPosition] = null;
    this.board[xPositionTo][yPositionTo] = checker;
};

function numberRange (
    start,
    end
) {
    return new Array(end - start).fill().map((element, index) => start + index);
}