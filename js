Build a Library
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title
  }
   get isCheckedOut() {
    return this._isCheckedOut
  }
   get ratings() {
    return this._ratings
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  } 
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfRating = this._ratings.length;
    return ratingsSum / lengthOfRating;
  }
  addRating(num) {
    if(num < 1 || num > 5) {
      return "sorry, you have to put rating between 1 to 5"
    } else {
      return this._ratings.push(num);
    }
  }
}

class Book extends Media {
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime, movieCast) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast= [];
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }

  get movieCast() {
    return this._movieCast;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }


  shuffle(songs) {
    for (let i = songs.length -1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let songArray = songs[i];
      songs[i] = songs[randomIndex];
      songs[randomIndex] = songArray;
      }
    return songs;
  }
}
  
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie ('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const testCd = new CD ('Stereo IT', 'comuterocholic', ['js','learning','codecademy'])


console.log(testCd.shuffle(['javascriptlover', 'jsjs','nanaclasses','lalaobjects']))

class Catalog {
    constructor(mediaList){
    this._MyCatalog = [];
   }
  
get mediaList() {
     return this._mediaList;
  }
  
set mediaList(newMedialist)  {
   this._MyCatalog.push(newMedialist);
   }
}


const newMediaCatolog = new Catalog();
newMediaCatolog.mediaList = historyOfEverything;
newMediaCatolog.mediaList = speed;

console.log(newMediaCatolog)


