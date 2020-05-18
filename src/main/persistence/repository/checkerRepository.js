// imports
const idGenerator = require('./idGenerator');
const fs = require('fs');
const path = require('path');

// constants
const CHECKER = 'checker';
const dirpath = path.join(`${__dirname}/out/${CHECKER}`);

module.exports = {
    createCheckers : function(
        checkers,
        matchId
    ) {
        fs.writeFileSync(`${dirpath}/${matchId}`, JSON.stringify(checkers));
        return checkers;
    },
    getCheckers : function(matchId) {
        const fileContent = fs.readFileSync(`${dirpath}/${matchId}`);
        return JSON.parse(fileContent);
    },
    updateCheckers : function(
        checkers,
        matchId
    ) {
        this.createCheckers(checkers, matchId);
    }
};