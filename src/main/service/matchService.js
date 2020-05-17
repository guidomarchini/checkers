/**
 * Service for CRUD of Matches.
 */
const matchRepository = require('../persistence/repository/matchRepository');

module.exports = {
    newMatch : function(firstTurn) {
        return matchRepository.createMatch(firstTurn);
    },
    getMatch : function(id) {
        return matchRepository.getMatch(id);
    },
    updateMatch: function(match) {
        return matchRepository.updateMatch(match)
    }
}