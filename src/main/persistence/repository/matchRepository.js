// imports
require('../entity/matchEntity')
const idGenerator = require('./idGenerator');
const fs = require('fs');
const path = require('path');

// constants
const MATCH = 'match';
const dirpath = path.join(`${__dirname}/out/${MATCH}`);

module.exports = {
    createMatch : function(firstTurn) {
        const newMatchId = idGenerator.generateId(MATCH);
        const newMatch = new MatchEntity(newMatchId, firstTurn, new Date());
        fs.writeFileSync(`${dirpath}/${newMatchId}`, JSON.stringify(newMatch));
        return newMatch;
    },
    getMatch : function(id) {
        return fs.readFile(`${dirpath}/${id}`, (err, data) => {
            if (err) throw err;
            return JSON.parse(data);
        });
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