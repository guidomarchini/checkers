/**
 * Service for CRUD of Matches.
 */
const matchRepository = require('../persistence/repository/matchRepository');

module.exports = {
    newMatch : function(firstTurn) {
        matchRepository.createMatch(firstTurn);
    },
    getMatch : function(id) {
        matchRepository.getMatch(id);
    },
    updateMatch: function(match) {
        matchRepository.updateMatch(match)
    }
}