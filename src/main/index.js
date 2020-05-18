const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const gameService = require('./service/gameService');
const linkService = require('./service/linkService');
const matchService = require('./service/matchService');

app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());

// UI calls
/** Home page */
app.get('/', function(req, res) {
    // TODO whish i had known about
    console.log('returning home page');
    res.sendFile(path.join(__dirname+'/views/home.html'))
});

/** Match page */
app.get('/damas/:linkId', function(req, res) {
    const linkId = req.params.linkId;
    console.log(`[link=${linkId}] fetching link`);
    const link = linkService.fetchLink(linkId);
    // TODO on link missing
    res.render(
        path.join(__dirname+'/views/match.html'),
        link,
        function(err, html) {
            res.send(html);
        }
    )
});

// api calls
/** Gets all available matches. */
/* this one could be removed if homepage used ejs */
app.get('/apis/matches', function(req, res) {
    console.log('fetching all matches');
    res.json(gameService.getAllMatches())
});

/** Creates a new match, returning the links for both white and black players. */
app.post('/apis/matches', function(req, res) {
    console.log('creating new game');
    // res.sendStatus(201);
    res.json(gameService.newGame());
});

/** Returns the game for the given id */
app.get('/apis/matches/:matchId', function(req, res) {
    const matchId = req.params.matchId;
    console.log(`[match=${matchId}] fetching game`);
    res.json(gameService.getGame(matchId))
});

/** Returns the current turn of the match. Used for polling */
app.get('/apis/matches/:matchId/turn', function(req, res) {
    const matchId = req.params.matchId;
    console.log(`[match=${matchId}] fetching current turn`);
    res.send(matchService.getMatch(matchId).currentTurn);
});

/** Generates a checker move, updating the match. */
app.put('/apis/matches/:matchId', function(req, res) {
    const matchId = req.params.matchId;
    let movementRequest = req.body;
    console.log(`[match=${matchId}] moving from: [${movementRequest.xAxisFrom}, ${movementRequest.yAxisFrom}] to [${movementRequest.xAxisTo}, ${movementRequest.yAxisTo}]`)
    gameService.moveChecker(matchId, movementRequest);
    res.sendStatus(200);
});

app.listen(3000, function() {
    console.log('Starting server in port 3000!');
});