var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var key in library.playlists) {
    console.log(`${library.playlists[key].id}: ${library.playlists[key].name} - ${library.playlists[key].tracks.length} tracks`);
  }
}

// printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var key in library.tracks) {
    console.log(`${library.tracks[key].id}: ${library.tracks[key].name} by ${library.tracks[key].artist} (${library.tracks[key].album})`);
  }
}

//printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  console.log(`${library.playlists[playlistId].id}: ${library.playlists[playlistId].name} - ${library.playlists[playlistId].tracks.length} tracks`);

  for (var key of library.playlists[playlistId].tracks) {
    console.log(`${library.tracks[key].id}: ${library.tracks[key].name} by ${library.tracks[key].artist} (${library.tracks[key].album})`);
  }
}

//printPlaylist("p01");


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.includes(trackId) ? console.log("This track already exists") : library.playlists[playlistId].tracks.push(trackId);
  console.log(library.playlists[playlistId].tracks);
}

// addTrackToPlaylist("t04","p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

//console.log(uid());

// adds a track to the library

var addTrack = function (name, artist, album) {
  let newID = uid();
  //var newTrack = {id: newID, name: name, artist: artist, album: album}
  library.tracks[newID] = {id: newID, name: name, artist: artist, album: album}

  //console.log(library.tracks[newID]);
  console.log(library.tracks);
}

// addTrack("This is a song", "I am an artist", "This is my album");

// adds a playlist to the library

var addPlaylist = function (name) {
  let newID = uid();
  library.playlists[newID] = {id: newID, name: name, tracks: []}

  console.log(library.playlists[newID]);
}

// addPlaylist("Relaxing songs");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

  var re = new RegExp(query, "gi");
  let searchCount = 0;

  for (var key in library.tracks) {

    let searchString = `${library.tracks[key].id} ${library.tracks[key].name} ${library.tracks[key].artist} ${library.tracks[key].album}`;

    if (searchString.search(re) != -1) {
      // console.log(library.tracks[key]); // This printed out the whole object.. decided to format for better results
      console.log(`id: ${library.tracks[key].id}\nname: ${library.tracks[key].name}\nartist: ${library.tracks[key].artist}\nalbum: ${library.tracks[key].album}`);
    } else {
      searchCount++;
    }

  }

  if (searchCount === Object.keys(library.tracks).length) {
    console.log("No search results found");
  }

}

printSearchResults("john");

// testing git
