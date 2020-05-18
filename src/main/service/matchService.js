const matchRepository = require('../persistence/repository/matchRepository');

/**
 * Service for CRUD of Matches.
 */
module.exports = {
    newMatch : function(firstTurn) {
        return matchRepository.createMatch(firstTurn);
    },
    getMatch : function(id) {
        return matchRepository.getMatch(id);
    },
    getAllMatches : function() {
        return matchRepository.getAllMatches();
    },
    updateMatch: function(match) {
        return matchRepository.updateMatch(match)
    }
}