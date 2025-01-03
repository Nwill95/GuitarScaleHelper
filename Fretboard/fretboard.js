let xpos = 80;
let ypos = 200;
let guitarStrings = 6;
let bassStrings = 4;

function createFretboard() {
  snares = [];
  uniqueScaleFinderNotes = [];
  let loopEnd = 0;
  let stringNotes;
  if (inst === "Guitar") {
    loopEnd = guitarStrings;
  } else if (inst === "Bass") {
    loopEnd = bassStrings;
  }
  for (let j = 0; j < loopEnd; j++) {
    snares[j] = [];
    for (let i = 0; i < neckSize; i++) {
      snares[j][i] = new Fret(
        notes[(notes.indexOf(options[j].value()) + i) % 12],
        i,
        j,
        false
      );
    }
  }
}
