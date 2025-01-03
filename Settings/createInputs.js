function createNoteOptions() {
  sel1 = createSelect();
  sel1.size(60, 20);
  sel1.position(20, 30);
  for (i = 0; i < notes.length; i++) {
    sel1.option(notes[i]);
  }
  sel1.changed(noteSelectEvent);
}

function createModeOptions() {
  sel2 = createSelect();
  sel2.size(60, 20);
  sel2.position(100, 30);
  for (i = 1; i < 8; i++) {
    sel2.option(i);
  }
  sel2.changed(modeSelectEvent);
}

// function createTuningOptions(){
//   sel3 = createSelect();
//   sel3.size(60, 20);
//   sel3.position(180, 30);
//   for (i = 0; i < tunings.length; i++) {
//     sel3.option(tunings[i]);
//   }
//   sel3.selected(0);
//   sel3.changed(tuningSelectEvent);
// }

function createInstrumentOptions() {
  sel4 = createSelect();
  sel4.size(60, 20);
  sel4.position(260, 30);
  sel4.option("Guitar");
  sel4.option("Bass");
  sel4.changed(instrumentSelectEvent);
}

function createPentatonicOptions() {
  sel5 = createSelect();
  sel5.size(100, 20);
  sel5.position(340, 30);
  sel5.option("Normal");
  sel5.option("Pentatonic");
  sel5.changed(pentatonicSelectEvent);
}

function createGroundnoteOption() {
  checkbox = createCheckbox("", false);
  checkbox.position(460, 30);
  checkbox.changed(checkboxSelectEvent);
}

function createNecksizeOptions() {
  sel6 = createSelect();
  sel6.size(60, 20);
  sel6.position(540, 30);
  sel6.option("12");
  sel6.option("24");
  sel6.selected("24");
  sel6.changed(neckSizeEvent);
}

function createStringSelections() {
  let a;
  if (inst == "Guitar") {
    a = 6;
  } else {
    a = 4;
  }
  for (let i = 0; i < 6; i++) {
    options.push(i);
    options[i] = createSelect();
    options[i].size(40, 20);
    options[i].position(20, ypos + 5 + i * fretHeight);
    for (let j = 0; j < notes.length; j++) {
      options[i].option(notes[j]);
    }
  }
  changeStringsToGuitar();
  options[0].changed(changeStringsEvent);
  options[1].changed(changeStringsEvent);
  options[2].changed(changeStringsEvent);
  options[3].changed(changeStringsEvent);
  options[4].changed(changeStringsEvent);
  options[5].changed(changeStringsEvent);
}

function createChordButtons() {
  radio = createRadio();
  radio.option("None", 0);
  for (let i = 0; i < chords.length; i++) {
    radio.option(
      chords[i].type + " " + chords[i].one + chords[i].three + chords[i].five,
      i + 1
    );
  }
  radio.position(xpos, ypos + 220);
  radio.style("width", "1000px");
  radio.changed(chordifyEvent);
}

function createClearButton() {
  clearButton = createButton("Clear");
  clearButton.position(xpos-60,463);
  clearButton.mousePressed(clearSelection);
}

function clearSelection(){
  matchingScales = [];
  scaleFinderNotes = [];
  uniqueScaleFinderNotes = [];
  for(let i = 0; i < snares.length; i++){
    for(let j = 0; j < snares[i].length; j++){
      snares[i][j].selected = false;
    }
  }
}

function createInputs() {
  createNoteOptions();
  createModeOptions();
  createInstrumentOptions();
  createPentatonicOptions();
  createGroundnoteOption();
  createNecksizeOptions();
  createStringSelections();
  createChordButtons();
  createClearButton();
}
