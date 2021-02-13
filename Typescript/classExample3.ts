class Song {
    constructor(private artist: string, private title: string) {  }
    play() {
        console.log('Playing: ' + this.title + ', by ' + this.artist);
    }
}


class Jukebox {
    constructor(private songs: Song[]) {
    }
    play() {
        var song = this.getRandomSong();
        song.play();
    }

    private getRandomSong() {
        var songCount = this.songs.length;
        var songIndex = Math.floor(Math.random() * songCount);

        return this.songs[songIndex];
    }
}

var songs = [
    new Song('Arijit Singh', 'Ae Dil Hai Mushkil'),
    new Song('Amit Mishra & Shilpa Rao', 'Bulleya'),
    new Song('Armaan Malik & Neeti Mohan', 'Sau Aasmaan'),
    new Song('Arijit Singh', 'Lo Maan Liya'),
    new Song('Palak Muchhal', 'Kaun Tujhe')
];

var jukebox = new Jukebox(songs);
jukebox.play();

