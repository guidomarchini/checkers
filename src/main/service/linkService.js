const linkRepository = require('../persistence/repository/linkRepository');
require('../commons');

/**
 * Service for CRUD of links.
 */
module.exports = {
    generateLinks : function(match) {
        return {
            "viewLink": linkRepository.createLink(match.id, SPECTATOR),
            "whitePlayerLink": linkRepository.createLink(match.id, WHITE),
            "blackPlayerLink": linkRepository.createLink(match.id, BLACK)
        }
    },
    fetchLink : function(id) {
        return linkRepository.getLink(id)
    }
}