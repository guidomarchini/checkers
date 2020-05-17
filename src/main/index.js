const express = require('express');
const app = express();
const path = require('path');

const gameService = require('./service/gameService');

// UI calls
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/views/home.html'))
});

app.get('/damas/{link_id}', function(req, res) {
    // TODO
});

// api calls
/**
 * Creates a new match, returning the links for both white and black players.
 */
app.post('/apis/matches', function(req, res) {
    // res.json(gameService.newGame());
});

app.get('/apis/matches/{id}', function(req, res) {
    // TODO
})

app.listen(3000, function() {
    console.log('Starting server in port 3000!');
});