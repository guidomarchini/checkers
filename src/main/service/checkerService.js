const checkerRepository = require('../persistence/repository/checkerRepository');

/**
 * Service for CRUD of Checkers.
 * A checker alone is never returned, so they're linked to a match as a collection of Checkers.
 */
module.exports = {
    saveCheckers : function(
        checkers,
        match
    ) {
        return checkerRepository.createCheckers(checkers, match.id);
    },
    getCheckersForMatch: function(matchId) {
        return checkerRepository.getCheckers(matchId);
    },
    updateCheckers: function(
        checkers,
        matchId
    ) {
        return checkerRepository.updateCheckers(checkers, matchId);
    }
};
