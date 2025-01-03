class Scale {
  constructor(index_, ground_, mode_, requestType_) {
    this.index = index_;
    this.ground = ground_;
    this.root = ground_;
    this.mode = mode_;
    this.requestType = requestType_;
    this.notes = [];
    
    let scl = [];
    let temp1 = 1;
    //Create new sequence of the selected mode, from the sequence of mode 1
    let modeSequence = [];
    for (let i = 0; i < sequence.length; i++) {
      temp1 = sequence[(i + this.mode) % 7];
      modeSequence.push(temp1);
    }

    //Add notes to scale according to the mode
    let temp2 = this.ground;
    for (let i = 0; i < modeSequence.length + 1; i++) {
      this.notes.push(notes[temp2]);
      temp2 = (this.ground + modeSequence[i]) % 12;
      this.ground += modeSequence[i];
    }
    if (this.requestType === 0) {
      return this.notes;
    } else if (this.requestType === 1) {
      return this;
    }
  }
}
