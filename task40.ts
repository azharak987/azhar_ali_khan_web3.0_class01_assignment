interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album{
    let album: Album = {
      artist: artist,
      title: title,
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  let album1: Album = make_album("Artist 1", "Album 1");
  let album2: Album = make_album("Artist 2", "Album 2", 12);
  let album3: Album = make_album("Artist 3", "Album 3", 8);
  
  console.log(make_album("Atif Aslam", "Album 1"));
  console.log(make_album("Arijit Singh", "Album 2", 2));
  console.log( make_album("Ali Zafar", "Album 3"));