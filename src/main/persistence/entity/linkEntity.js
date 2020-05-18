/**
 * A Link for persistence, given to players and spectators.
 * It contains the relation between the match and the player.
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