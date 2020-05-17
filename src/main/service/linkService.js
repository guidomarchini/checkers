/**
 * Service for CRUD of links.
 */
const linkRepository = require('../persistence/repository/linkRepository');
require('../commons');

module.exports = {
    generateLinks : function(match) {
        return {
            "viewLink": linkRepository.createLink(match.id, SPECTATOR),
            "whitePlayerLink": linkRepository.createLink(match.id + 1, WHITE),
            "blackPlayerLink": linkRepository.createLink(match.id + 2, BLACK)
        }
    },
    fetchLink : function(id) {
        return linkRepository.getLink(id)
    }
}