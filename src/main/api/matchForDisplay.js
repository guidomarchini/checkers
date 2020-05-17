/**
 * One of the entities returned for the home page.
 * @param startedAt the date the match has been started
 * @param currentTurn the current player turn
 * @param viewLink the link to view the match
 */
function MatchForDisplay(
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
