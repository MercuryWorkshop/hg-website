/**
 * if you're trying to steal my code,
 * thank you! its an honor you think its cool :)
 * 
 * Website made by Ember314 (insert github link)
 * p5js is at https://p5js.org/
 */
console.log("SH!MMER HARDER!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");
console.log("%c ", "font-size: 1px; padding: 166.5px 250px; background-size: 500px 333px; background: no-repeat url(https://www.thesprucepets.com/thmb/1UbjES4JpBsZ2goLgJlpSsT6W9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148611850-584f93145f9b58a8cd106c13.jpg);");
const MIN_BROWSER_WIDTH = 495;//when the browser is less than these values, a popup will cover the page
const MIN_BROWSER_HEIGHT = 1700;

window.onload = function() { //this makes the page load 'smoothly'
  window.scrollTo({
      top: 0,
  });
  document.getElementById("hide").style.backgroundColor = "rgba(0,0,0,0)";
  document.getElementById("hide").style.pointerEvents = "none";
}

sketchWidth = document.getElementById("stars").offsetWidth;
sketchHeight = document.getElementById("stars").offsetHeight;

starNumber = Math.sqrt(Math.pow(sketchHeight, 2) + Math.pow(sketchWidth, 2)) / 8; //feel free to change, but its good rn

function setup() {
  var canvas = createCanvas(sketchWidth, sketchHeight);
  canvas.parent("stars");//this sets what div the canvas is in
  frameRate(60);//maybe I'll do a variable refresh rate
  renderStars();
}

function renderStars() {//this generates the stars, they are regenerated on resize
  starX = [];
  starY = [];
  starSize = [];
  for (var j = 0; j < starNumber; j++) {
      starX.push(Math.floor(Math.random() * sketchWidth) + 1);
      starY.push(Math.floor(Math.random() * sketchHeight) + 1);
      starSize.push(Math.floor(Math.random() * 10) + 1);
  }

}

function draw() {

  if (sketchWidth < MIN_BROWSER_WIDTH) {//covers the page when its too small (stfu i'm an amazing frontend dev)
      document.getElementById("hide").innerHTML = "<h1>your browser is too thin!</h1>"
      document.getElementById("hide").style.backgroundColor = "rgb(15, 15, 50)";
  } else if (sketchHeight < MIN_BROWSER_HEIGHT) {
      document.getElementById("hide").innerHTML = "<h1>your browser is too short!</h1>"
      document.getElementById("hide").style.backgroundColor = "rgb(15, 15, 50)";
  } else {
      document.getElementById("hide").innerHTML = ""
      document.getElementById("hide").style.backgroundColor = "rgba(0,0,0,0)";
  }

  stroke('white');
  fill('white');
  clear()
  for (var i = 0; i < starNumber; i++) {//draws the stars adjusted for paralax for each frame
      circle(starX[i], starY[i] + ((window.scrollY * starSize[i]) * -0.5), starSize[i])
  }

}

function windowResized() { //regenerates stars on window resize

  sleep(500).then(function() {
      clear();
      sketchWidth = document.getElementById("stars").offsetWidth;
      sketchHeight = document.getElementById("stars").offsetHeight;
      starNumber = Math.sqrt(Math.pow(sketchHeight, 2) + Math.pow(sketchWidth, 2)) / 8;
      resizeCanvas(sketchWidth, sketchHeight);
      renderStars();
      draw();
  })

}

/*haha*/
function sleep(millisecondsDuration) {
  return new Promise((resolve) => {
      setTimeout(resolve, millisecondsDuration);
  })
}