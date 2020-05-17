/**
 * Service for CRUD of links.
 */
const linkRepository = require('../persistence/repository/linkRepository');
require('../commons')

module.exports = {
    generateLinks : function(match) {
        return {
            "viewLink": linkRepository.createLink(match.id, null),
            "whitePlayerLink": linkRepository.createLink(match.id, WHITE),
            "blackPlayerLink": linkRepository.createLink(match.id, BLACK)
        }
    },
    fetchLink : function(id) {
        linkRepository.getLink(id)
    }
}