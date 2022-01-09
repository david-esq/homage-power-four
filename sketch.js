// DBC Homage to the Homage to the square by Josef Albers

let r = 255 - 100 * fxrand();
let g = 255 - 100 * fxrand();
let b = 255 - 100 * fxrand();
let variance = fxrand();

// Stay inside the window viewport : take the max of W/H as the square width
let w = Math.min(window.innerWidth, window.innerHeight);


console.log("RED = "+ Math.round(r) );
console.log("GRE = "+ Math.round(g) );
console.log("BLU = "+ Math.round(b) );
console.log("Y   = "+ variance );

// The statements in the setup() function
// execute once when the program begins
function setup() {
  // createCanvas must be the first statement
  createCanvas(w-20, w-20);
  noStroke(); // Set line drawing color to white
}

// Handle resizing in a responsive way: Canva always show centered in the viewport, no overflow
function windowResized() {
  w = Math.min(window.innerWidth, window.innerHeight);
  resizeCanvas(w-20, w-20);
}

// Draw the initial scene
function draw() {
  background(255-r, 255-g, 255-b); // Set the background square to a random color
  homageToSquare(w, Math.round(r), Math.round(g), Math.round(b) );
}


function drawSquare(squareSize, squareColor) {
  posX = width/2 - squareSize/2;
  posY = height/2 - squareSize/2 - squareSize/6 + 100*variance;
  colorMode(RGB);
  fill (squareColor);
  rect (posX, posY, squareSize, squareSize); //( xstart, ystart, width, height)
}


function homageToSquare( squareSize, r, g, b){

  let from = color(r, g, b);
  let to = color(255-b, 255-r, 255-g);
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);

//  if (variance > 0.5) v = 0;
  drawSquare(squareSize/(2-0.25), interA);
  drawSquare(squareSize/3, from);
  drawSquare(squareSize/4, to);
  drawSquare(squareSize/6, interB);
}


// function drawCircle(x, radius, level) {
//   // 'level' is the variable that terminates the recursion once it reaches
//   // a certain value (here, 1). If a terminating condition is not
//   // specified, a recursive function keeps calling itself again and again
//   // until it runs out of stack space - not a favourable outcome!
//   const tt = (126 * level) / 4.0;
//   fill(tt);
//   ellipse(x, height / 2, radius * 2, radius * 2);
//   if (level > 1) {
//     // 'level' decreases by 1 at every step and thus makes the terminating condition
//     // attainable
//     level = level - 1;
//     drawCircle(x - radius / 2, radius / 2, level);
//     drawCircle(x + radius / 2, radius / 2, level);
//   }
// }
