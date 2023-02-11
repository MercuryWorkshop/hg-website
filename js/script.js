/**
 * My code is on the verge of death
 *
 * Website made by 
 * Ember314 (https://github.com/ember3141)
 * CoolElectronics (https://github.com/CoolElectronics)
 * 
 * p5js is at https://p5js.org/
 */
/*haha*/
const mobile = mobileCheck();
const sleep = (millis) => new Promise((resolve) => setTimeout(resolve, millis));
const framerate = 60;
const starScaling = 16;


var starX, starY, starSize, smoothScrollY, lastScrollY;

console.log("%c SH!MMER HARDER!", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");
console.log("%cThis website was made by Ember314 (@ember3141 on github)", "color:green");
console.log("%cThis website was also made by CoolElectronics (@CoolElectronics on github)", "color:lightBlue");
window.onload = () => { //this makes the page load 'smoothly'
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
starNumber = calcStarNumber(); //feel free to change, but its good rn
function nav(url) {
    window.location = url;
}

function setup() {
    var canvas = createCanvas(sketchWidth, sketchHeight);
    canvas.parent("stars"); //this sets what div the canvas is in
    frameRate(framerate); //maybe I'll do a variable refresh rate
    if (mobile) return;
    renderStars();
    smoothScrollY = 0;
}

function renderStars() { //this generates the stars, they are regenerated on resize
    starX = [];
    starY = [];
    starSize = [];
    for (var j = 0; j < starNumber; j++) {
        starX.push(Math.floor(Math.random() * sketchWidth) + 1);
        starY.push(Math.floor(Math.random() * sketchHeight) + 1);
        starSize.push(Math.floor(Math.random() * 10) + 1); 3
    }
}

function draw() {
    if (mobile) return;
    clear();
    if(frameCount%50==0){
        setSizes();
    }
    smoothScrollY = lerp(smoothScrollY, window.scrollY, 0.15);
    for (var i = 0; i < starNumber; i++) { //draws the stars adjusted for paralax for each frame
        circle(starX[i], starY[i] + ((smoothScrollY * starSize[i]) * -0.36), starSize[i])
    }
}

function windowResized() { //regenerates stars on window resize
    clear();
    setSizes();
    starNumber = calcStarNumber();
    resizeCanvas(sketchWidth, sketchHeight);
    renderStars();
    draw();
    })
}
function calcStarNumber() {
    return Math.sqrt(Math.pow(sketchHeight, 2) + Math.pow(sketchWidth, 2)) / starScaling;
}

function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

