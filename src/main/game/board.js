require('../persistence/entity/checkerEntity');
require('../commons');

/**
 * Represents the checker board.
 * It contains information about how the checkers are in the board.
 */
global.Board = function() {
    this.boardSize = 10;

    this.board = [];
    for(let i=0; i<this.boardSize; i++) {
        this.board[i] = new Array(this.boardSize);
    }
};
/**
 * Returns the checker by the given position
 */
Board.prototype.checkerAt = function(
    xAxis,
    yAxis
) {
    return this.board[xAxis][yAxis]
};
/**
 * Initializes the checker board.
 * By the end of it, returns the checkers that were created
 */
Board.prototype.initializeCheckers = function() {
    const self = this;
    const checkers = [];
    checkers[WHITE] = [];
    checkers[BLACK] = [];

    function addInRows(color, yIndex, modFunction) {
        for(let xIndex = 0;
            xIndex < self.boardSize;
            xIndex++) {
            if (modFunction(xIndex)) {
                const check = new CheckerEntity(color, xIndex, yIndex);
                self.board[xIndex][yIndex] = check;
                checkers[color].push(check)
            }
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
 * Places the already created checkers on the board.
 */
Board.prototype.placeCheckers = function(checkers) {
    checkers.forEach(checker => {
        this.board[checker.xPosition][checker.yPosition] = checker
    });
};
/**
 * Moves the checker in the given position to a given coordinate.
 * Returns the list of the eaten checkers
 */
Board.prototype.moveChecker = function(
    xAxisFrom,
    yAxisFrom,
    xAxisTo,
    yAxisTo
) {

    // arrange
    const checker = this.checkerAt(xAxisFrom, yAxisFrom);

    const xRange = numberRange(xAxisFrom, xAxisTo);
    const yRange = numberRange(yAxisFrom, yAxisTo);

    // diagonal movement means same range length
    if (xRange.length !== yRange.length) {
        throw "Invalid movement";
    }
    if (this.checkerAt(xAxisTo, yAxisTo)) {
        throw "There's a checker in that cell!";
    }

    const eatenCheckers = [];

    // gather eaten checkers
    let currentCell = null;
    for (let rangeIndex = 0; rangeIndex < xRange.length; rangeIndex++) {
        const yPosition = yRange[rangeIndex];
        const xPosition = xRange[rangeIndex];

        currentCell = this.checkerAt(xPosition, yPosition);
        if (currentCell) {
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

    // these are not used, but are part of the game ;P
    this.board[checker.xPosition][checker.yPosition] = null;
    this.board[xAxisTo][yAxisTo] = checker;

    checker.xPosition = xAxisTo;
    checker.yPosition = yAxisTo;

    return eatenCheckers;
};

function numberRange (
    start,
    end
) {
    if (end > start) {
        return new Array(end - start).fill().map((element, index) => start + index + 1);
    } else {
        return new Array(start - end).fill().map((element, index) => start - index - 1);
    }
}