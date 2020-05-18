/**
 * Service for CRUD of Checkers.
 * All checkers of a match are needed for the operations.
 */
const checkerRepository = require('../persistence/repository/checkerRepository');

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
        match
    ) {
        return checkerRepository.updateCheckers(checkers, match);
    }
};
