// imports
require('../entity/matchEntity')
const idGenerator = require('./idGenerator');
const fs = require('fs');
const path = require('path');

// constants
const MATCH = 'match';
const dirpath = path.join(`${__dirname}/out/${MATCH}`);

// a match creates 3 links: spectator, white checkers player, black checkers player.
// spectator link matches its match id, and the other 2 are the ones that follows.
// the match has to delegate its id creation to the links.
// I know, it's ugly. I know I can do this better
const idEntity = 'link';

module.exports = {
    createMatch : function(firstTurn) {
        const newMatchId = idGenerator.generateId(idEntity);
        const newMatch = new MatchEntity(newMatchId, firstTurn, new Date());
        fs.writeFileSync(`${dirpath}/${newMatchId}`, JSON.stringify(newMatch));
        return newMatch;
    },
    getMatch : function(id) {
        const fileContent = fs.readFileSync(`${dirpath}/${id}`);
        return JSON.parse(fileContent);
    },
    getAllMatches : function() {
        return fs.readdirSync(dirpath).map(file => {
            const fileContent = fs.readFileSync(`${dirpath}/${file}`);
            return JSON.parse(fileContent);
        });
    },
    updateMatch: function(match) {
        fs.writeFileSync(`${dirpath}/${match.id}`, JSON.stringify(match));
        return match;
    }
};