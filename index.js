// Please see the learn & examples section of https://p5js.org for a more comprehensive introduction to p5.js.
//
// https://gist.github.com/zachlatta/abe14c8e1c7ab32c8d8297bdf986dbbb has more info.

// If you need to load assets, do that here

var song;
var clarinet;
var keyArray = [];
var notes = [];
var notecheck = [];
var note = "";
var stop = false;
var start;
function preload() {
  clarinet = loadImage("clarinet3.png");
  lowe = loadSound('lowe.wav');
  lowf = loadSound('lowf.wav');
  lowfs = loadSound('lowfs.wav');
  lowg = loadSound('lowg.wav');
  lowgs  = loadSound('lowgs.wav');
  lowa = loadSound('lowa.wav');
  lowas = loadSound('lowas.wav');
  lowb = loadSound('lowb.wav');
  lowc = loadSound('lowc.wav');
  lowcs = loadSound('lowcs.wav');
  lowd = loadSound('lowd.wav');
  lowds = loadSound('lowds.wav');
  mide = loadSound('mide.wav');
  midf = loadSound('midf.wav');
  midfs = loadSound('midfs.wav');
  midg = loadSound('midg.wav');
  midgs = loadSound('midgs.wav');
  mida = loadSound('mida.wav');
  midas = loadSound('midas.wav');
  midb = loadSound('midb.wav');
  midc = loadSound('midc.wav');
  midcs = loadSound('midcs.wav');
  midd = loadSound('midd.wav');
  midds = loadSound('midds.wav');
  highe = loadSound('highe.wav');
  highf = loadSound('highf.wav');
  highfs = loadSound('highfs.wav');
  highg = loadSound('highg.wav');
  higha = loadSound('higha.wav');
  highas = loadSound('highas.wav');
  highb = loadSound('highb.wav');
  highc = loadSound('highc.wav');
}

function setup() {
  createCanvas(screen.width, screen.height);
  imageMode(CENTER);
  ellipseMode(CENTER);
  notes = [lowe, lowf, lowfs, lowg, lowgs, lowa, lowas, lowb, lowc, lowcs, lowd,lowds, mide, midf, midfs, midg, midgs, mida, midas, midb, midc, midcs, midd, midds, highe, highf, highfs, highg, higha, highas, highb, highc];
   
  for (var i =0; i < 26; i++) {
    notecheck += [false];
  }
}

 
function draw() {
 
  background('white');
  image(clarinet, screen.width/2, screen.height/2*.65, screen.width*0.2, screen.height*.6);
  fill(0);
  stroke(0);
  textSize(55);
  text("Current Note: " + note, screen.width*.05, screen.height*.1);
  textSize(30);
  text("Press x to tongue", screen.width*.75, screen.height*.1 )
  ////////////////////////////
  
    if (keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5] && keyArray[10] && keyArray[11] && keyArray[12] && keyArray[14] && keyArray[8]) {
      if (keyArray[1]) {
        note = "Mid B";
        if (!notes[19].isPlaying()) {
          checkrun(19);
          notes[19].loop();
        }
      } else {
        note = "Low E";
        if (!notes[0].isPlaying()) {
          checkrun(0);
          notes[0].loop();
        }
      }
    }
    else if ((keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5] && keyArray[10] && keyArray[11] && keyArray[12] && keyArray[15]) || (keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5] && keyArray[10] && keyArray[11] && keyArray[9] && keyArray[14])) {
      if (keyArray[1]) {
        if (!notes[20].isPlaying()) {
          checkrun(20);
          notes[20].loop();
        }
        note = "Mid C#"
      } else {
        note = "Low F#"
        if (!notes[2].isPlaying()) {
          checkrun(2);
          notes[2].loop();
            
        }    
      }
    
    }
    
    else if (keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5] && keyArray[10] && keyArray[11] && keyArray[12] && keyArray[14]) {
      if (keyArray[1]) {
        if (!notes[20].isPlaying()) {
          checkrun(20);
          notes[20].loop();
            
        }    
        note = "Mid C";
      } else {
        note = "Low F";
        if (!notes[1].isPlaying()) {
          checkrun(1);
          notes[1].loop();
            
        } 
      }
    
    }
    
    else if (keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5] && keyArray[10] && keyArray[11] && keyArray[12] && keyArray[13]) {
      if (keyArray[1]) {
        note = "Mid D#"
        if (!notes[23].isPlaying()) {
          checkrun(23);
          notes[23].loop();
            
        } 
      } else {
        note = "Low G#"
        if (!notes[4].isPlaying()) {
          checkrun(4);
          notes[4].loop();
            
        } 
      }
      
    }
    //This is the pattern that doesn't work
    else if ( keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5] && keyArray[10] && keyArray[11] && keyArray[12]) {
      if (keyArray[1]) {
        if (!notes[22].isPlaying()) {
          checkrun(22);
          notes[22].loop();
        } 
        note = "Mid D";
      } else {
        if (!notes[3].isPlaying()) {
          checkrun(3);
          notes[3].loop();
        } 
        note = "Low G";
      }
      
    }
    
    else if (keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5] && keyArray[11] && keyArray[10]) {
      if (keyArray[1]) {
        if (!notes[24].isPlaying()) {
          checkrun(24);
          notes[24].loop();
        } 
        note = "High E";
      } else {  
        if (!notes[5].isPlaying()) {
          checkrun(5);
          notes[5].loop();
        } 
        note = "Low A";
      }
    
    }
    else if (keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5] && keyArray[11]) {
      if (keyArray[1]) {
        if (!notes[26].isPlaying()) {
          checkrun(26);
          notes[26].loop();
        } 
        note = "High F#";
      } else {
        if (!notes[7].isPlaying()) {
          checkrun(7);
          notes[7].loop();
        } 
        note = "Low B";
      }
      
    }
    else if (keyArray[0] && keyArray[3] && keyArray[4] &&  keyArray[5] && keyArray[7]) {
      if (keyArray[1]) {
        if (!notes[28].isPlaying()) {
          checkrun(28);
          notes[28].loop();
        } 
        note = "High G#"
      } else {
        if (!notes[9].isPlaying()) {
          checkrun(9);
          notes[9].loop();
        } 
        note = "Low C#"
      }
      
    }
    else if (keyArray[0] && keyArray[3] && keyArray[4] && keyArray[5]) {
      if (keyArray[1]) {
        if (keyArray[10]) {
          if (!notes[25].isPlaying()) {
            checkrun(25);
            notes[25].loop();
          } 
          note = "High F"
        } else {
          if (!notes[27].isPlaying()) {
            checkrun(27);
            notes[27].loop();
          } 
          note = "High G";
        }
      
      } else if (keyArray[10]) {
        if (!notes[6].isPlaying()) {
            checkrun(6);
            notes[6].loop();
          } 
        note = "Low A#";
    
      } else {
        if (!notes[8].isPlaying()) {
            checkrun(8);
            notes[8].loop();
        } 
        note = "Low C";
      }
      
    }
    
    else if (keyArray[0] && keyArray[3] && keyArray[4] && keyArray[17] ) {
      if (keyArray[1]) {
        if (!notes[29].isPlaying()) {
          checkrun(29);
          notes[29].loop();
        } 
        note = "High A#"
      } else {
        if (!notes[11].isPlaying()) {
          checkrun(11);
          notes[11].loop();
        } 
        note = "Low D#"
      }
    }
    else if (keyArray[0] && keyArray[3] && keyArray[4]) {
      if (keyArray[1]) {
        if (!notes[28].isPlaying()) {
          checkrun(28);
          notes[28].loop();
        } 
        note = "High A";
      } else {
        if (!notes[10].isPlaying()) {
          checkrun(10);
          notes[10].loop();
        } 
        note = "Low D";
      }
      
    }
    
    else if (keyArray[3] && keyArray[0]) {
      if (keyArray[1]) {
        if (!notes[30].isPlaying()) {
          checkrun(30);
          notes[30].loop();
        } 
        note = "High B";
      } else {
        if (!notes[12].isPlaying()) {
          checkrun(12);
          notes[12].loop();
        } 
        note = "Mid E";
      }
      
    } 
    else if (keyArray[0]) {
      if (keyArray[1]) {
        if (!notes[31].isPlaying()) {
          checkrun(31);
          notes[31].loop();
        } 
        note = "High C";
      } else {
        if (!notes[13].isPlaying()) {
          checkrun(13);
          notes[13].loop();
        } 
        note = "Mid F"
                
        
      }
    } 
    else if (keyArray[3] && keyArray[0] == false) {
      if (!notes[14].isPlaying()) {
          checkrun(14);
          notes[14].loop();
      } 
      note = "Mid F#"
    } 
    else if (keyArray[21] && keyArray[0] == false) {
      if (!notes[16].isPlaying()) {
          checkrun(16);
          notes[16].loop();
      } 
      note = "Mid G#"
    }
    else if (keyArray[2] && keyArray[1]) {
      if (!notes[18].isPlaying()) {
          checkrun(18);
          notes[18].loop();
      } 
      note = "Mid A#"
    }
  
    else if (keyArray[2]) {
      if (!notes[17].isPlaying()) {
          checkrun(17);
          notes[17].loop();
      } 
      note = "Mid A"
    } 
    else if (keyArray[0] == false) {
      if (!notes[15].isPlaying()) {
          checkrun(15);
          notes[15].loop();
      } 
      note = "Mid G";
    } else {
        for (var i = 0; i < notes.length; i++) {
          notes[i].stop();
      }
    }
  
  if (keyArray[0]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.55, screen.height*.252, screen.width*.010, screen.width*.010);
  }
  if (keyArray[1]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.55, screen.height*.228, screen.width*.005, screen.width*.010)
  }
  if (keyArray[2]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.475, screen.height*.243, screen.width*.003, screen.width*.008);
  }
  if (keyArray[3]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.475, screen.height*.258, screen.width*.008, screen.width*.008);
  }
  if (keyArray[4]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.475, screen.height*.285, screen.width*.008, screen.width*.008);
  }
  if (keyArray[5]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.475, screen.height*.31, screen.width*.007, screen.width*.007);
  }
  if (keyArray[6]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.487, screen.height*.327, screen.width*.008, screen.width*.005);
  }
  if (keyArray[7]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.482, screen.height*.31, screen.width*.004, screen.width*.010);
  }
  if (keyArray[8]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.487, screen.height*.343, screen.width*.004, screen.width*.009);
  }
  if (keyArray[9]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.490, screen.height*.347, screen.width*.0038, screen.width*.009);
  }
  if (keyArray[10]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.475, screen.height*.355, screen.width*.007, screen.width*.007);
  }
  if (keyArray[11]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.475, screen.height*.377, screen.width*.007, screen.width*.007);
  }
  if (keyArray[12]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.475, screen.height*.401, screen.width*.007, screen.width*.007);
  }
  if (keyArray[13]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.471, screen.height*.415, screen.width*.012, screen.width*.006);
  }
  if (keyArray[14]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.471, screen.height*.431, screen.width*.012, screen.width*.006);
  }
  if (keyArray[15]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.461, screen.height*.429, screen.width*.010, screen.width*.006);
  }
  if (keyArray[16]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.461, screen.height*.415, screen.width*.010, screen.width*.006);
  }
  if (keyArray[17]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.458, screen.height*.333, screen.width*.0065, screen.width*.003);
  }
  if (keyArray[18]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.458, screen.height*.326, screen.width*.0065, screen.width*.003);
  }
  if (keyArray[19]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.458, screen.height*.319, screen.width*.0065, screen.width*.003);
  }
  if (keyArray[20]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.458, screen.height*.312, screen.width*.0065, screen.width*.003);
  }
   if (keyArray[21]) {
    fill(255, 255, 91);
    stroke(255, 255, 91)
    ellipse(screen.width*.484, screen.height*.243, screen.width*.003, screen.width*.010);
  }
  if (keyArray[22]) {
     for (var i = 0; i < notes.length; i++) {
      if (notes[i].isPlaying()) {
        notes[i].stop();
        notes[i].play();
        keyArray[22] = false;
        }
      }
    
  } 
}

function reset() {

  for (var i = 0; i < keyArray.length; i++) {
    keyArray[i] = false;
  }

}

function keyPressed() {
   
  if (keyCode == 32) {
    keyArray[0] ^= true;
  } 
  if (key == 'C') {
    keyArray[1] ^= true;
    
  }
  if (key == 'G') {
    keyArray[2] ^= true;
     
  }
  if (key == 'F') {
    keyArray[3] ^= true;
 
  }
  if (key == 'D') {
    keyArray[4] ^= true;
    
  }
  if (key == 'S') {
    keyArray[5] ^= true;
    
  }
 
  if (key == 'Z') {
    keyArray[6] ^= true;
    
  }
  if (key == 'Q') {
    keyArray[7] ^= true;
    
  }
  if (key == 'A') {
    keyArray[8] ^= true;
     
  }
  if (keyCode == 20) {
    keyArray[9] ^= true;
     
  }
  if (key == 'H') {
    keyArray[10] ^= true;
    print("H");
   
  }
  if (key == 'J') {
    keyArray[11] ^= true;
     
  }
  if (key == 'K') {
    keyArray[12] ^= true;
    
  }
  if (key == 'L') {
    keyArray[13] ^= true;
     
  }
  if (keyCode == 186) {
    keyArray[14] ^= true;
     
  }
  if (keyCode == 190) {
    keyArray[15] ^= true;
    
  }
  if (keyCode == 191) {
    keyArray[16] ^= true;
     
  }
  if (keyCode == 73) {
    keyArray[17] ^= true;
   
  }
  if (keyCode == 85) {
    keyArray[18] ^= true;
     
  }
  if (keyCode == 89) {
    keyArray[19] ^= true;
     
  }
  if (keyCode == 84) {
    keyArray[20] ^= true;
     
  }
  if (key == 'V') {
    keyArray[21] ^= true;
  }
  if (key == 'X') {
    keyArray[22] ^= true;
  }
}
function checkrun (self) {
  
  for (var i = 0; i < notes.length; i++) {
      if (notes[i].isPlaying() && notes[i] != self) {
        notes[i].stop();
      }
       
    }
   
  }

 


 