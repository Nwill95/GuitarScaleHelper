let n = 0; //Groundnote global index
let m = 1; //Mode global index

function update(n_, m_) {
  n = n_;
  m = m_;
  matchingScales = [];
  scaleFinderNotes = [];
  createFretboard(inst);
  mainScale = new Scale(undefined, n % neckSize, m-1,0);
  commonScale = new Scale(undefined, n % neckSize, 0,0);
  createChords(mainScale);
  if (pent == "Pentatonic") {
    mainScale.splice(3, 1);
    mainScale.splice(5, 1);
  }
  commonNotes();
  createPentatonic(pent);
  sel2.show();
  if (m == 1 || m == 6) {
    sel5.show();
  }
  eraseRadio();
  createChordButtons();
}

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

function modifyScale(scale_) {
  let a = scale_;
  if (a.includes("C" && "C♯")) {
    let b = a.indexOf("C♯");
    a.splice(b, 1);
    a.insert(b, "D♭");
  }
  if (a.includes("D" && "D♯")) {
    let b = a.indexOf("D♯");
    a.splice(b, 1);
    a.insert(b, "E♭");
  }
  if (a.includes("F" && "F♯")) {
    let b = a.indexOf("F♯");
    a.splice(b, 1);
    a.insert(b, "G♭");
  }
  if (a.includes("G" && "G♯")) {
    let b = a.indexOf("G♯");
    a.splice(b, 1);
    a.insert(b, "A♭");
  }
  if (a.includes("A" && "A♯")) {
    let b = a.indexOf("A♯");
    a.splice(b, 1);
    a.insert(b, "B♭");
  }
  return a;
}
