/**
 * Response for a new match game.
 * It contains the links for both black and white players.
 */
function NewMatchResponse(
    whitePlayerLink,
    blackPlayerLink
) {
    this.whitePlayerLink = whitePlayerLink;
    this.blackPlayerLink = blackPlayerLink;
}