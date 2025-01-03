function drawTable() {
  push();
  noStroke();
  textSize(18);
  textStyle(BOLD);
  let ystart = 480;
  text("Selected notes: " + uniqueScaleFinderNotes, xpos, ystart);
  if (uniqueScaleFinderNotes.length > 0) {
    text("Possible scales: ", xpos, ystart + 30);
  }
  textSize(14);
  textStyle(NORMAL);
  let spacing = 15;
  for (let i = 0; i < matchingScales.length; i++) {
    let y = ystart + 5 + (i + 3) * spacing;
    if (y < height-30) text(matchingScales[i], xpos, y);
  }
  pop();
}

function drawFretboard() {
  push();
  for (let j = 0; j < snares.length; j++) {
    for (let i = 0; i < snares[j].length; i++) {
      snares[j][i].draw();
    }
  }
  pop();
}

function drawNuts() {
  push();
  stroke(0);
  strokeWeight(5);
  if (inst == "Guitar") {
    line(
      xpos + 1 * fretWidth,
      ypos,
      xpos + 1 * fretWidth,
      ypos + 6 * fretHeight
    );
    line(
      xpos + 13 * fretWidth,
      ypos,
      xpos + 13 * fretWidth,
      ypos + 6 * fretHeight
    );
  } else if (inst == "Bass") {
    line(
      xpos + 1 * fretWidth,
      ypos,
      xpos + 1 * fretWidth,
      ypos + 4 * fretHeight
    );
    line(
      xpos + 13 * fretWidth,
      ypos,
      xpos + 13 * fretWidth,
      ypos + 4 * fretHeight
    );
  }
  if (neckSize == 23 && inst == "Guitar") {
    line(
      xpos + 23 * fretWidth,
      ypos,
      xpos + 23 * fretWidth,
      ypos + 6 * fretHeight
    );
  } else if (neckSize == 23 && inst == "Bass") {
    line(
      xpos + 23 * fretWidth,
      ypos,
      xpos + 23 * fretWidth,
      ypos + 4 * fretHeight
    );
  }

  //Draw fretnumbers
  push();
  noStroke();
  textAlign(CENTER);
  for (let i = 0; i < neckSize; i++) {
    if (dots.includes(i)) {
      ellipse(
        xpos + i * fretWidth + fretWidth / 2,
        ypos + 0 * fretHeight - 17,
        15,
        15
      );
    }
    text(i, xpos + i * fretWidth + fretWidth / 2, ypos + 0 * fretHeight - 12);
  }
  pop();
  pop();
}

function drawText() {
  push();
  textStyle(BOLD);
  textAlign(LEFT);
  textSize(40);
  text(mainScale, xpos, 120);
  pop();
  push();
  textStyle(BOLD);
  text("Note", 20, 20);
  text("Mode", 100, 20);
  text("Instrument", 260, 20);
  text("Normal/Pentatonic", 340, 20);
  text("Groundnote", 460, 20);
  text("Neck size", 540, 20);
  textStyle(ITALIC);
  text("Disabled", 260, 45);
  text("Disabled", 100, 45);
  text("Disabled", 340, 45);
  pop();
}
