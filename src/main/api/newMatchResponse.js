/**
 * Response for a new match game.
 * It contains the links for both black and white players.
 */
global.NewMatchResponse = function(
    whitePlayerLink,
    blackPlayerLink
) {
    this.whitePlayerLink = whitePlayerLink;
    this.blackPlayerLink = blackPlayerLink;
}