let notes = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
let sequence = [2, 2, 1, 2, 2, 2, 1];
let modeNames = ["Mayor","Dorian","Phrygian","Lydian","Mixolydian","Minor","Locrian"]
let scales = [[]]; //Main scale
let scaleString;
let common = []; //Array of notes common between mode 1 and mode i
let scaleFinderNotes = []; //Array of selected columns
let uniqueScaleFinderNotes = [];
let allScales = [];
let matchingScales = [];
let mainScale = [];
let commonScale = [];
let modifiedScale = [];
//let t = 0; //Tuning global index
let inst = "Guitar"; //Instrument global index
let pent = "Normal"; //Pentatonic y/n global index
let neckSize = 23;
const dots = [3, 5, 7, 9, 12, 15, 17, 19, 21];
let snares = [];
let defaultGuitarStringNotes = [4,11,7,2,9,4];
let defaultBassStringNotes = [7,2,9,4];

function setup() {
  createCanvas(1400, 700);
  background(200);
  createAllScales();
  mainScale = new Scale(undefined, 0 % neckSize, 0,0);
  commonScale = new Scale(undefined, 0 % neckSize, 0,0);
  commonNotes();
  createChords(mainScale);
  createInputs();
  createFretboard(inst);
}

function commonNotes() {
  common = [];
  for (let i = 0; i < mainScale.length; i++) {
    for (let j = 0; j < commonScale.length; j++) {
      if (mainScale[i] === commonScale[j]) {
        common.push(mainScale[i]);
      }
    }
  }
}

function draw() {
  background(200);
  drawText();
  drawTable();
  drawFretboard();
  drawNuts()
}
