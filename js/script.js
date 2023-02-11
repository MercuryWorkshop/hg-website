/**
 * My code is on the verge of death
 * 
 * Website made by Ember314 (https://github.com/ember3141)
 * p5js is at https://p5js.org/
 */
 console.log("%c SH!MMER HARDER!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");
 console.log("%cThis website was made by Ember314 (@ember3141 on github)", "color:green");
 window.onload = function() { //this makes the page load 'smoothly'
     window.scrollTo({
         top: 0,
     });
     document.getElementById("hide").style.backgroundColor = "rgba(0,0,0,0)";
     document.getElementById("hide").style.pointerEvents = "none";
 }
 
 function setSizes() {
     document.getElementById("stars").style.width = document.getElementById("body").offsetWidth + "px";
     document.getElementById("stars").style.height = document.getElementById("body").offsetHeight + "px";
     sketchWidth = document.getElementById("body").offsetWidth;
     sketchHeight = document.getElementById("body").offsetHeight;
 }
 setSizes();
 starNumber = Math.sqrt(Math.pow(sketchHeight, 2) + Math.pow(sketchWidth, 2)) / 8; //feel free to change, but its good rn
 function nav(url) {
     window.location = url;
 }
 
 function setup() {
     var canvas = createCanvas(sketchWidth, sketchHeight);
     canvas.parent("stars"); //this sets what div the canvas is in
     frameRate(60); //maybe I'll do a variable refresh rate
     renderStars();
 }
 
 function renderStars() { //this generates the stars, they are regenerated on resize
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
     setSizes();
     stroke('white');
     fill('white');
     clear()
     for (var i = 0; i < starNumber; i++) { //draws the stars adjusted for paralax for each frame
         circle(starX[i], starY[i] + ((window.scrollY * starSize[i]) * -0.5), starSize[i])
     }
 }
 
 function windowResized() { //regenerates stars on window resize
     sleep(500).then(function() {
         clear();
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