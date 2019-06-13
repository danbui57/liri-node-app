# liri-node-app

LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data from Twitter, Spotify, and OMDB API's. 

## Built with

```markup
- Twitter
- Node-Spotify-API
- Request
- OMDB API
- DotEnv
- Node.js
```

## Liri Commands:

### my-tweets
* This will show the last 20 of my most recent tweets

### spotify-this-song "input"
* This will show the following information about the song in your terminal/bash window
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* If no song is provided then your program will default to "The Sign" by Ace of Base

### movie-this "input"
* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Rotten Tomatoes Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie

### do-what-it-says
* It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt