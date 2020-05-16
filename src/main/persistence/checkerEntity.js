/**
 * A Checker for persistence.
 * @param id the id of the checker
 * @param matchId the match id this checker belongs to
 * @param color the color of the checker
 * @param xPosition the position of the x axis on the board
 * @param yPosition the position of the y axis of the board
 */
function CheckerEntity(
    id,
    matchId,
    color,
    xPosition,
    yPosition
) {
    this.id = id;
    this.matchId = matchId;
    this.color = color;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
}