# checkers
Checkers code challenge, together with the investigation of a new language for me :)

## About the game
This checkers game is kinda different thatn the original one. The differences:
* Board is 10x10!
* Checkers can move anywhere in range to a free space, but
* Checkers can't jump over a friendly checker
* Checkers can eat any number of enemy checkers that are on the way

## Architecture
This proyect is made with Nodejs, express and (a little of) ejs. Front end has vanilla js.

The application is structured in layers. Let's start from the bottom:

### Persistence Entities
If this application would have a model, this is the one (in fact, they are...). These clases are anemic, and contain the data for making a game.
1. Checker: The checker...it has a color and a position on the board.
2. Match: It contains the match creation date and current turn.
3. Link: This is the 'link' between the player and the match. Each match generates 3 links: Spectator, White, Black.

### Repositories
Repositories are stored in files...had to distribute the short time I had!

Basically, every entity has its own repository. There's an id generator there that...umh...generates the ids...

### Service
Services are the ones that comunicates with the repositories and prepares the data to be returned via API.
1. LinkService: Generates links for spectator and both players.
2. MatchService: CRUD for match.
3. CheckerService: CRUD for checkers.
4. GameService: It orchestrates the game movements. Kind of a CRUD for the game itself.

### Game
It contains the game functionality.
Board: It contains the board information (size, checkers). It's the responsible of moving the checkers and returning what checkers leave the game.
Checker(s)Game: Orchestrates the game.

### Application
(would be nice to have this one in a folder, huh?)
Index.js is the main class of the application. It contains the server data, similar to a controller. 
The requests are separated between UI and REST calls.
UI
GET("/) returns the home page.
GET("/damas/:link") returns the match. Used for players and spectators.

RESTfull services
GET("/apis/matches") Returns all the matches (this one could be removed if homepage used ejs)
POST("/apis/matches") Creates a new match, returning the links for white checkers player and black checkers player.
GET("/apis/matches/:matchId") Returns the match corresponding the given match id.
GET("/apis/matches/:matchId/turn") Returns the current turn of the match. Used for polling.
PUT("/apis/matches/:matchId") Generates a checker move, updating the match.

### Views
Html files are contained in this folder.



