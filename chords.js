let chords = [0, 0, 0, 0, 0, 0, 0];
let chordNumber = 7;
let chordScale = [];

class Chord {
  constructor(name_, one_, three_, five_) {
    this.name = name_;
    this.one = one_;
    this.three = three_;
    this.five = five_;
    this.type = "";
    this.first = 0;
    this.second = 0;
  }
}

function createChords(scale_) {
  chordScale =  scale_;
  chords = [];
  let firstinterval = 0;
  let secondinterval = 0;
  let index1 = 0;
  let index2 = 0;
  let index3 = 0;
  let index4 = 0;
  let corr = 7;
  for (let i = 0; i < chordNumber; i++) {
    chords[i] = new Chord(i + 1, chordScale[(i) % corr], chordScale[(2 + i) % corr], chordScale[(4 + i) % corr]);
    index1 = (i) % corr;
    index2 = (i + 1) % corr;
    index3 = (i + 2) % corr;
    index4 = (i + 3) % corr;
    firstinterval = sequence[index1] + sequence[index2];
    secondinterval = sequence[index3] + sequence[index4];
    chords[i].first = firstinterval;
    chords[i].second = secondinterval;
    
    if (chords[i].first == 4 && chords[i].second == 3) {
      chords[i].type = "Major";
    } else if (chords[i].first == 3 && chords[i].second == 4) {
      chords[i].type = "Minor";
    } else if (chords[i].first == 3 && chords[i].second == 3) {
      chords[i].type = "Dim";
    }
  }
}