// Методи об'єкта и this при звернені до характеристик в методах
// - changeName
// - addTrack
// - updateRating
// - getTrackCount

const playilst = {
    name: 'My super playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    changeName(newName) {
        console.log('this всередині changeName ', this);
    
        this.name = newName;
    },

    addTrack(newTrack) {
        this.tracks.push(newTrack);
    },

    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount(count) {
        return this.tracks.length;
    },
}

console.log(playilst.getTrackCount())

playilst.addTrack('track-4')
console.log(playilst.getTrackCount())

playilst.changeName('New cool playlist')

console.log(playilst.name);

playilst.updateRating(8);
console.log(playilst)