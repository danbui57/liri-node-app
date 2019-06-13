require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs")
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify)
var request = require("request");
var liriRequest = process.argv.splice(3).join(" ");
var liriReturn = process.argv[2]
var twitter = require("twitter")
var client = new twitter(keys.twitter);

var logInput = liriReturn + " " + liriRequest +"\n";
            storeThis(logInput)

switch (liriReturn) {
    case "my-tweets":
        myTweets();       
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;



    default: console.log("\n" + "type in any of these commands after 'node liri.js'" + "\n" +
        "my-tweets" + "\n" +
        "spotify-this-song" + "\n" +
        "movie-this" + "\n" +
        "movie-this" + "\n" +
        "do-what-it-says" + "\n");
}


function myTweets() {
    var params = { screen_name: 'Daniel22816210' };

    client.get('statuses/user_timeline', params, function (error, tweets, response) {

        if (!error) {
            for (var i = 0; i < tweets.length; i++)
            // console.log(response)
                console.log(tweets[i].text)
        }
        else
            console.log("ERROR: " + error);
        return;

    })
};

function spotifyThisSong() {


    if (!liriRequest) {
        liriRequest = "The Sign";
        
    }
    spotify.search({ type: "track", query: liriRequest}, function (err, data) {
        
        if (!err) {
            var songInfo = data.tracks.items;
            // console.log(songInfo)
            for (var i = 0; i < 1; i++) {
                if (songInfo[i] != undefined) {

        
                    console.log("Artist: " + songInfo[i].artists[0].name + "\n" +
                        "Song: " + songInfo[i].name + "\n" +
                        "Preview Url: " + songInfo[i].preview_url + "\n") +
                        "Album: " + songInfo[i].album.name + "\n"
                }
            }
            
        } else {
            return console.log("Error :" + err);}


           
    });
};


function movieThis()   {

if (!liriRequest) {
    liriRequest = "Mr. Nobody"
    console.log(liriRequest)
}
                                                                        
// movieName = process.argv[3];

var queryUrl = "http://www.omdbapi.com/?t=" + liriRequest + "&y=&plot=short&tomatoes=true&apikey=trilogy";

console.log(liriRequest);

request(queryUrl, function(error, response, body) {

// If the request is successful run the following code
  if (!error && response.statusCode === 200) {


    // * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.


    var body = JSON.parse(body);
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    var result =    "Title:" + body.Title + "\n" +
                    "Year:" + body.Year + "\n" +
                    "Rating:" + body.imdbRating +"\n" +
                    "Rotten Tomatoes Rating:" + body.tomatoRating + "\n" +
                    "Country:" + body.Country + "\n" +
                    "Language:" + body.Language + "\n" +
                    "Plot:" + body.Plot + "\n" +
                    "Actors:" + body.Actors + "\n"

                    console.log(result)
  
    

  } else { 
      return console.log("ERROR: " + error);
      
    }
});

}

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function(err, data) {
        // If there's an error reading the textFile, we log it and return immediately
        if (err) {
          console.log("ERROR: " + err);
        } else console.log(data)
        output = data.split(",")
        console.log(output)
        spotifyThisSong(output[0] + output[1])
    })

    
}

function storeThis(logInput) {

    fs.appendFile("log.txt", logInput, function(err) {

        // If an error was experienced we say it.
        if (err) {
          console.log("ERROR: " + err);
        }
      
        // If no error is experienced, log the phrase "Content Added" to our node console.
        else 
          console.log("Content Added!");
        
        })
    };