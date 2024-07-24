class Media {
    constructor(info) {
        this.publisgDate = info.publisgDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}



const mySong = new Song({
    artist: "Queen",
    name: "We are the champions",
    publisgDate: 1977
});

console.log(mySong);

