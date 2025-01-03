let fretWidth = 35;
let fretHeight = 35;

class Fret{
  constructor(note_,i_,j_){
    this.note = note_
    this.i  = i_
    this.j = j_
    this.selected = false;
  }
  
  draw(){
    //Set fillcolor
    fill(220);
    stroke(1);
    let alpha = 180;
    if(this.selected == true){
      fill(0,0,255,alpha);
    }else
    //If this note is in the scale, draw this fret green
    if(common.includes(this.note)){
      fill(0,255,0,alpha);
    //If this note is not common between mode 1 and the selected one, draw this fret red
    }else if(!common.includes(this.note) && mainScale.includes(this.note)){
      fill(255,0,0,alpha);
    }
    //Draw frets
    rect(xpos + this.i * fretWidth,ypos + this.j*fretHeight,fretWidth,fretHeight);
    
    //Draw chordnotes
    push();
    if(chordnotes.includes(this.note)){
      fill(0,100);
    rect(xpos + this.i * fretWidth,ypos + this.j*fretHeight,fretWidth,fretHeight);
    }
    pop();
    
    //Draw text
    fill(0);
    stroke(2);
    textAlign(CENTER);
    textSize(fretWidth/2-2);
    text(this.note,xpos+this.i*fretWidth+fretWidth/2-2,ypos+this.j*fretHeight+fretHeight/2+5);
  }
}