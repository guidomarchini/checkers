const express = require('express');
const app = express();
const path = require('path');

const gameService = require('./service/gameService');
const linkService = require('./service/linkService');


// UI calls
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/home.html'))
});

app.get('/damas/:linkId', function(req, res) {
    const link = linkService.fetchLink(req.params.linkId);
    // TODO to ejs and render filling link
    res.render(
        path.join(__dirname+'/views/match.html'),
        link
    )
});

// api calls
/**
 * Creates a new match, returning the links for both white and black players.
 */
app.get('/apis/matches', function(req, res) {
    res.json(gameService.getAllMatches())
});

app.post('/apis/matches', function(req, res) {
    res.json(gameService.newGame());
});

app.get('/apis/matches/:matchId', function(req, res) {
    res.json(gameService.getGame(req.params.matchId))
});

app.put('/apis/matches/:matchId', function(req, res) {
    gameService.moveChecker(req.params.matchId, req.body);
});

app.listen(3000, function() {
    console.log('Starting server in port 3000!');
});