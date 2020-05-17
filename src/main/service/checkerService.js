/**
 * Service for CRUD of Checkers.
 * All checkers of a match are needed for the operations.
 */
const checkerRepository = require('../persistence/repository/checkerRepository');

module.exports = {
    saveCheckers : function(checkers, match) {
        checkerRepository.createCheckers(checkers, match.id);
    },
    getCheckersForMatch: function(match) {
        checkerRepository.getCheckers(match.id);
    },
    updateCheckers: function(checkers, match) {
        checkerRepository.updateCheckers(checkers, match);
    }
};
