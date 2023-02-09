
 sketchWidth = document.getElementById("stars").offsetWidth;
 sketchHeight = document.getElementById("stars").offsetHeight;
 
 const NUMBER_OF_STARS = Math.sqrt(Math.pow(sketchHeight, 2) + Math.pow(sketchWidth, 2))/8;
 
 function setup(){
  
     var canvas = createCanvas(sketchWidth, sketchHeight);
     canvas.parent("stars");
     frameRate(60);
     //document.documentElement.scrollTop = document.body.scrollTop = 0;
 
 }
 var starX = [];
 var starY = [];
 var starSize =[];
 for(var j=0; j<NUMBER_OF_STARS;j++){
   starX.push(Math.floor(Math.random() * sketchWidth) + 1);
   starY.push(Math.floor(Math.random() * sketchHeight) + 1);
   starSize.push(Math.floor(Math.random() * 10) + 1);
 }
 
 
 function draw(){
   stroke('white');
   fill('white');
 clear()
   for(var i =0; i<NUMBER_OF_STARS; i++){
     circle(starX[i],starY[i]+((window.scrollY*starSize[i])*-0.5),starSize[i])
   }
 
 }