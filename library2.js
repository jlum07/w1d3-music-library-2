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
          },
  printPlaylists: function () {
              for (var key in this.playlists) {
                console.log(`${this.playlists[key].id}: ${this.playlists[key].name} - ${this.playlists[key].tracks.length} tracks`);
              }
          },
  printTracks : function () {
              for (var key in this.tracks) {
                console.log(`${this.tracks[key].id}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`);
              }
          },
  printPlaylist : function (playlistId) {
              console.log(`${this.playlists[playlistId].id}: ${this.playlists[playlistId].name} - ${this.playlists[playlistId].tracks.length} tracks`);

              for (var key of this.playlists[playlistId].tracks) {
                console.log(`${this.tracks[key].id}: ${this.tracks[key].name} by ${this.tracks[key].artist} (${this.tracks[key].album})`);
              }
          },
  addTrackToPlaylist : function (trackId, playlistId) {
              this.playlists[playlistId].tracks.includes(trackId) ? console.log("This track already exists") : this.playlists[playlistId].tracks.push(trackId);
              // console.log(this.playlists[playlistId].tracks);
          },
  uid : function() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
          },
  addTrack : function (name, artist, album) {
              let newID = this.uid();
              //var newTrack = {id: newID, name: name, artist: artist, album: album}
              this.tracks[newID] = {id: newID, name: name, artist: artist, album: album}

              //console.log(library.tracks[newID]); //testing
              console.log(library.tracks); //also testing
          },
  addPlaylist : function (name) {
              let newID = this.uid();
              this.playlists[newID] = {id: newID, name: name, tracks: []}

              console.log(this.playlists[newID]); //testing to see if playlist was added
          },
  printSearchResults : function(query) {

              var re = new RegExp(query, "gi");
              let searchCount = 0;

              for (var key in this.tracks) {

                let searchString = `${this.tracks[key].id} ${this.tracks[key].name} ${this.tracks[key].artist} ${this.tracks[key].album}`;

                if (searchString.search(re) != -1) {
                  // console.log(this.tracks[key]); // This printed out the whole object.. decided to format for better results
                  console.log(`id: ${this.tracks[key].id}\nname: ${this.tracks[key].name}\nartist: ${this.tracks[key].artist}\nalbum: ${this.tracks[key].album}`);
                } else {
                  searchCount++;
                }
              }

              if (searchCount === Object.keys(this.tracks).length) {
                console.log("No search results found");
              }
          }

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// library.printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// library.printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// library.printPlaylist("p01");


// adds an existing track to an existing playlist

// library.addTrackToPlaylist("t04","p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

// console.log(library.uid());


// adds a track to the library

// library.addTrack("This is a song", "I am an artist", "This is my album");


// adds a playlist to the library

// library.addPlaylist("Relaxing songs");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// library.printSearchResults("john");

