/**
 * Service that orchestrates the game creation and movements
 */
// imports
require('../model/checkerGame');
require('../commons');
require('../api/newMatchResponse');

// variables
const matchService = require('matchService');
const checkerService = require('checkerService');
const linkService = require('linkService');

module.exports = {
    newGame : function() {
        const newCheckerGame = new CheckerGame().newGame();

        const match = matchService.newMatch(newCheckerGame.turn);
        checkerService.saveCheckers(
            getAllCheckers(newCheckerGame),
            match
        );
        const links = linkService.generateLinks(match);

        return new NewMatchResponse(
            links.whitePlayerLink,
            links.blackPlayerLink
        )
    }
};

function getAllCheckers(checkerGame) {
    return checkerGame[WHITE].concat(checkerGame[WHITE]);
}