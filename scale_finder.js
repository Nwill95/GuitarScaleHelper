let indexAdded = [];

function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  let upperLimit = ypos;
  let lowerLimit = ypos + fretHeight * snares.length;
  let leftLimit = xpos;
  let rightLimit = xpos + fretWidth * neckSize;
  let row;
  let column;
  if (
    mouseY > upperLimit &&
    mouseY < lowerLimit &&
    mouseX > leftLimit &&
    mouseX < rightLimit
  ) {
    column = floor((mouseX - xpos) / fretWidth);
    row = floor((mouseY - ypos) / fretHeight);
    selectForScaleFinder(column, row);
    searchMatchingScales();
  }
}

function selectForScaleFinder(x, y) {
  if (snares[y][x].selected == true) {
    snares[y][x].selected = false;
    const index = scaleFinderNotes.indexOf(snares[y][x].note);
    scaleFinderNotes.splice(index, 1);
  } else {
    snares[y][x].selected = true;
    scaleFinderNotes.push(snares[y][x].note);
  }
  uniqueScaleFinderNotes = [...new Set(scaleFinderNotes)];
}

function createAllScales() {
  let index = 1;
  for (let j = 0; j < notes.length; j++) {
    for (let i = 0; i < sequence.length; i++) {
      allScales.push(new Scale(index, j, i, 1));
      index++;
    }
  }
}

function searchMatchingScales() {
  matchingScales = [];

  let ar1 = scaleFinderNotes;
  let ar2;
  let temp = [];
  for (let i = 0; i < allScales.length; i++) {
    ar2 = allScales[i].notes;
    if (ar1.every((r) => ar2.includes(r))) {
      //console.log("Found all of", ar1, "in", ar2);
      temp = [];
      let root = allScales[i].root;
      let mode = allScales[i].mode;
      let name = notes[root] + " " + modeNames[mode];
      let score = 0;
      if (mode == 0) {
        score = 2;
      } else if (mode == 5) {
        score = 1;
      } else {
        score = 0;
      }
      temp = [name, score];
      matchingScales.push(temp);
    } else {
      //console.log("Did not find all of", ar1, "in", ar2);
    }
  }

  if (uniqueScaleFinderNotes.length == 0) {
    matchingScales = [];
  }
  matchingScales.sort(compareColumn);
  deleteColumn(matchingScales);
}

function compareColumn(a, b) {
  let column = 1;
  if (a[column] === b[column]) {
    return 0;
  } else {
    return a[column] < b[column] ? 1 : -1;
  }
}

function deleteColumn(array) {
  index = 1;
  array.forEach((a) => a.splice(index, 1));
}
