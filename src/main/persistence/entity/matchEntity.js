/**
 * A Match for persistence
 * @param id
 * @param currentTurn
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