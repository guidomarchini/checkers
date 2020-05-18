/**
 * Service that orchestrates the game creation and movements
 */
// imports
require('../model/checkerGame');
require('../commons');
require('../api/newMatchResponse');
require('../api/getMatchesResponse');
require('../api/matchResponse');

// variables
const matchService = require('./matchService');
const checkerService = require('./checkerService');
const linkService = require('./linkService');

module.exports = {
    getAllMatches : function() {
        return new GetMatchesResponse(matchService.getAllMatches());
    },
    newGame : function() {
        const newCheckerGame = new CheckerGame().newGame();

        const match = matchService.newMatch(newCheckerGame.currentTurn);
        checkerService.saveCheckers(
            getAllCheckers(newCheckerGame),
            match
        );
        const links = linkService.generateLinks(match);

        return new NewMatchResponse(
            links.whitePlayerLink,
            links.blackPlayerLink
        )
    },
    getGame : function(matchId) {
        const match = matchService.getMatch(matchId);
        const checkers = checkerService.getCheckersForMatch(matchId);
        const winner = calculateWinner(checkers);
        const currentTurn = winner ? SPECTATOR : match.currentTurn;

        return new MatchResponse(
            checkers,
            currentTurn,
            winner
        )
    },
    moveChecker : function(matchId, movementRequest) {
        const checkers = checkerService.getCheckersForMatch(matchId);
        const match = matchService.getMatch(matchId);

        const checkerGame = new CheckerGame().loadGame(checkers, match.currentTurn);
        checkerGame.moveChecker(
            movementRequest.xAxisFrom,
            movementRequest.yAxisFrom,
            movementRequest.xAxisTo,
            movementRequest.yAxisTo
        );

        match.currentTurn = checkerGame.currentTurn;
        matchService.updateMatch(match);
        checkerService.updateCheckers(getAllCheckers(checkerGame), matchId)
    }
};

function getAllCheckers(checkerGame) {
    return checkerGame.checkers[WHITE].concat(checkerGame.checkers[BLACK]);
}

function calculateWinner(checkers) {
    const colors = new Set(checkers.map(checker => checker.color));
    if (colors.size === 1) {
        return colors[0];
    } else return null;
}