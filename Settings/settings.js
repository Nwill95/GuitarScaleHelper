let sel1;
let sel2;
let sel3;
let sel4;
let sel5;
let sel6;
let options = [];
let radio;
let chordnotes = [];
let checkbox;
let clearButton;

function noteSelectEvent() {
  let char = sel1.value();
  for (i = 0; i < notes.length; i++) {
    if (char == notes[i]) {
      n = i;
    }
  }
  update(n, m);
  checkboxSelectEvent()
}

function modeSelectEvent() {
  m = sel2.value();
  if (m == 2 || m == 3 || m == 4 || m == 5 || m == 7) {
    sel5.hide();
  } else if (m == 1 || m == 6) {
    sel5.show();
  }
  update(n,m);
}

function instrumentSelectEvent() {
  inst = sel4.value();
  if(inst == "Bass"){
    changeStringsToBass();
  }else {changeStringsToGuitar();}
  createFretboard(inst);
  checkboxSelectEvent()
}

function changeStringsToBass(){
    for (let i = 0; i < bassStrings; i++){
      options[i].selected(notes[defaultBassStringNotes[i]])
    }
    options[4].hide();
    options[5].hide();
}

function changeStringsToGuitar(){
    options[4].show();
    options[5].show();
    for (let i = 0; i < guitarStrings; i++){
      options[i].selected(notes[defaultGuitarStringNotes[i]])
    }
}

function chordifyEvent(){
  chordnotes = [];
  if(radio.value() == 'None'){
    chordnotes = [];
  }else{
  chordnotes.push(chords[radio.value()-1].one)
  chordnotes.push(chords[radio.value()-1].three)
  chordnotes.push(chords[radio.value()-1].five)
  }
}

function eraseRadio(){
  radio.hide();
  chordnotes = [];
}

function pentatonicSelectEvent() {
  pent = sel5.value();
  createPentatonic(pent);
  createFretboard(inst);
  commonNotes();
}

function checkboxSelectEvent() {
  if (checkbox.checked()) {
    for (let i = 8; i >= 0; i--) {
      mainScale.splice(i, 1);
      common.splice(i, 1);
    }
    mainScale.push(notes[n]);
    common.push(notes[n]);
    sel2.hide();
    sel5.hide();
  } else {
    update(n, m);
  }
}

function neckSizeEvent() {
  neckSize = sel6.value();
  neckSize++;
  commonNotes();
  createFretboard(inst);
  update(n,m);
}

function changeStringsEvent(){
  commonNotes();
  createFretboard(inst);
  update(n,m);
}

