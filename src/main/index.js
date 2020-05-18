const express = require('express');
const app = express();
const path = require('path');

const gameService = require('./service/gameService');
const linkService = require('./service/linkService');

app.engine('html', require('ejs').renderFile);

// UI calls
app.get('/', function(req, res) {
    console.log('returning home page');
    res.sendFile(path.join(__dirname+'/views/home.html'))
});

app.get('/damas/:linkId', function(req, res) {
    const linkId = req.params.linkId;
    console.log(`[link=${linkId}] fetching link`);
    const link = linkService.fetchLink(linkId);
    // TODO to ejs and render filling link
    res.render(
        path.join(__dirname+'/views/match.html'),
        link,
        function(err, html) {
            res.send(html);
        }
    )
});

// api calls
/**
 * Creates a new match, returning the links for both white and black players.
 */
app.get('/apis/matches', function(req, res) {
    console.log('fetching all matches');
    res.json(gameService.getAllMatches())
});

app.post('/apis/matches', function(req, res) {
    console.log('creating new game');
    res.json(gameService.newGame());
});

app.get('/apis/matches/:matchId', function(req, res) {
    const matchId = req.params.matchId;
    console.log(`[match=${matchId}] fetching game`);
    res.json(gameService.getGame(matchId))
});

app.put('/apis/matches/:matchId', function(req, res) {
    const matchid = req.params.matchId;
    let movementRequest = req.body;
    console.log(`[match=${matchId}] moving from: [${movementRequest.xAxisFrom}, ${movementRequest.yAxisFrom}] to [${movementRequest.xAxisTo}, ${movementRequest.yAxisTo}]`)
    gameService.moveChecker(matchid, movementRequest);
});

app.listen(3000, function() {
    console.log('Starting server in port 3000!');
});