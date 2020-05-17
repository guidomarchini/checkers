// imports
const idGenerator = require('idGenerator');
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
        fs.readFile(`${dirpath}/${matchId}`, (err, data) => {
            if (err) throw err;
            return JSON.parse(data);
        });
    },
    updateCheckers : function(
        checkers,
        matchId
    ) {
        this.createCheckers(checkers, matchId);
    }
};