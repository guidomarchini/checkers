/**
 * A Link for persistence, given to players and spectators.
 * @param id the id of the link
 * @param matchId the id of the match this is linked with
 * @param player black, white
 */
function LinkEntity(
    id,
    matchId,
    player
) {
    this.id = id
    this.matchId = matchId;
    this.player = player;
}