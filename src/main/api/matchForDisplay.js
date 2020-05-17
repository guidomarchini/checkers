/**
 * One of the entities returned for the home page.
 * @param startedAt the date the match has been started
 * @param currentTurn the current player turn
 * @param viewLink the link to view the match
 */
global.MatchForDisplay = function(
    startedAt,
    currentTurn,
    viewLink
) {
    return {
        "started_at": startedAt,
        "current_turn": currentTurn,
        "view_link": viewLink
    }
}
