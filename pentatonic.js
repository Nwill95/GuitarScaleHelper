function createPentatonic(value_) {
  let val = str(value_);
  if (val == "Normal" && m-1 == 0) {
    mainScale = new Scale(undefined,n % 12, 0,0)
  } else if (val == "Pentatonic" && m-1 == 0) {
    mainScale = new Scale(undefined,n % 12, 0,0)
    mainScale.splice(3, 1);
    mainScale.splice(5, 1);
  } else if (val == "Normal" && m-1 == 5) {
    mainScale = new Scale(undefined,n % 12, 5,0)
  } else if (val == "Pentatonic" && m-1 == 5) {
    mainScale.splice(3, 1);
    mainScale.splice(5, 1);
  }
}

