// imports
require('../entity/linkEntity')
const idGenerator = require('./idGenerator');
const fs = require('fs');
const path = require('path');

// constants
const LINK = 'link';
const dirpath = path.join(`${__dirname}/out/${LINK}`);

module.exports = {
    createLink : function(
        matchId,
        player
    ) {
        const newLinkId = idGenerator.generateId(LINK);
        const newEntity = new LinkEntity(newLinkId, matchId, player);
        fs.writeFileSync(`${dirpath}/${newLinkId}`, JSON.stringify(newEntity));
        return newEntity;
    },
    getLink : function(id) {
        const fileContent = fs.readFileSync(`${dirpath}/${id}`);
        return JSON.parse(fileContent);
    }
};