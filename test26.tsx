class Song {
  track: number;
  seconds: number;
}

class Album {
  songs: Song[];
}

function getValue(property: keyof Song | Album): any {}

// getValue(new Song());
// getValue('songs');
getValue("seconds");
getValue("track");
