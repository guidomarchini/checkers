// imports
require('../entity/linkEntity')
const idGenerator = require('./idGenerator');
const fs = require('fs');
const path = require('path');

// constants
const LINK = 'link';
const dirpath = path.join(`${__dirname}/out/${LINK}`);

/** Repository for Link entities. */
module.exports = {
    createLink : function(
        matchId,
        player
    ) {
        const newLinkId = idGenerator.generateId(LINK);
        const newEntity = new LinkEntity(matchId, player);
        fs.writeFileSync(`${dirpath}/${newLinkId}`, JSON.stringify(newEntity));
        return newLinkId;
    },
    getLink : function(id) {
        const fileContent = fs.readFileSync(`${dirpath}/${id}`);
        return JSON.parse(fileContent);
    }
};