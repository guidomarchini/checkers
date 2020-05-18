/**
 * A Link for persistence, given to players and spectators.
 * @param id the id of the link
 * @param matchId the id of the match this is linked with
 * @param player black, white or spectator
 */
global.LinkEntity = function(
    matchId,
    player
) {
    this.matchId = matchId;
    this.player = player;
}