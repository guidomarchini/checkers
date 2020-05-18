/**
 * A Checkers match.
 * @param checkers the checkers that are on the board
 * @param currentTurn the current color turn
 * @param winner if the game has ended, this will return the winner
 */
global.MatchResponse = function(
    checkers,
    currentTurn,
    winner
) {
    this.checkers = checkers;
    this.currentTurn = currentTurn;
    this.winner = winner;
}