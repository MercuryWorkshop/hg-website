/*window.onload = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}*/

 sketchWidth = document.getElementById("stars").offsetWidth;
 sketchHeight = document.getElementById("stars").offsetHeight;
 
  starNumber = Math.sqrt(Math.pow(sketchHeight, 2) + Math.pow(sketchWidth, 2))/8;
 
 function setup(){
     var canvas = createCanvas(sketchWidth, sketchHeight);
     canvas.parent("stars");
     frameRate(60);
     renderStars();
 }

 function renderStars(){
  starX = [];
  starY = [];
  starSize =[];
 for(var j=0; j<starNumber;j++){
   starX.push(Math.floor(Math.random() * sketchWidth) + 1);
   starY.push(Math.floor(Math.random() * sketchHeight) + 1);
   starSize.push(Math.floor(Math.random() * 10) + 1);
 }
 
}
 
 function draw(){
  
   stroke('white');
   fill('white');
 clear()
   for(var i =0; i<starNumber; i++){
     circle(starX[i],starY[i]+((window.scrollY*starSize[i])*-0.5),starSize[i])
   }
 
 }

 function windowResized() {

  sleep(500).then(function() {
    clear();
    sketchWidth = document.getElementById("stars").offsetWidth;
    sketchHeight = document.getElementById("stars").offsetHeight;
    starNumber = Math.sqrt(Math.pow(sketchHeight, 2) + Math.pow(sketchWidth, 2))/8;
    resizeCanvas(sketchWidth,sketchHeight);
    renderStars();
    draw();
  })
  
}


function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}
