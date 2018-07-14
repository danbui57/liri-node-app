require("dotenv").config();

var Spotify = require("./keys.js");

var spotify = new Spotify(keys.spotify);
// var client = new twitter(keys.twitter);

spotify.search({ type: "track", query: "all the small things"}, function( error, data) {



    if (error) {
        return console.log('Error occurred: ' + err);
      }
     
    console.log(data); 
    });

