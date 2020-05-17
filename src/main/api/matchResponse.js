/**
 * A Checkers match.
 * @param checkers the checkers that are on the board
 * @param yourTurn boolean
 * @param currentTurn the current color turn
 * @param result if the game has ended, this will return the result
 */
global.MatchResponse = function(
    checkers,
    yourTurn,
    result
) {
    return {
        "checkers": checkers,
        "your_turn": yourTurn,
        "result": result
    }
}