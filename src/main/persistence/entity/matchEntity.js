/**
 * A Match for persistence.
 * @param id the match id
 * @param currentTurn the current turn of the match
 * @param startedAt the Date when this match started
 */
global.MatchEntity = function(
    id,
    currentTurn,
    startedAt
) {
    this.id = id;
    this.currentTurn = currentTurn;
    this.startedAt = startedAt;
}