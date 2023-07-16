function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist 1", "Album 1");
var album2 = make_album("Artist 2", "Album 2", 12);
var album3 = make_album("Artist 3", "Album 3", 8);
console.log(make_album("Atif Aslam", "Album 1"));
console.log(make_album("Arijit Singh", "Album 2", 2));
console.log(make_album("Ali Zafar", "Album 3"));
