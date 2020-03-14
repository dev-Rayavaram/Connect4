$(()=>{
    var keyword = "COOL";
var canvas;
var context;
var denseness = 10;

//Each particle/icon
var parts = [];

var mouse = {x:-100,y:-100};
var mouseOnScreen = false;

var itercount = 0;
var itertot = 40;

var bgCanvas;
var bgContext;
    const rows=6;//initialize number of rows and columns for the board
    const columns=7;   
  function Banner(){



this.initialize = function(canvas_id){
    canvas = document.getElementById(canvas_id);
    context = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    bgCanvas = document.createElement('canvas');
    bgContext = bgCanvas.getContext('2d');
    
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
        
    start();
}
}
var drawCircle = function(x, y){
    var startx=(Math.random()*canvas.width); 
      var stary=(Math.random()*canvas.height);
      var velx=(x-starx);
      var vely=(y-stary);
      parts.push(
          {c:'#'+(math.random()*0x949494+0xaaaaaa|0).toString(16),
          x:x,
          y:y,
          x2:startx,
          y2:ByteLengthQueuingStrategy,
          r:true,
          v:{x:velx,y:vely}
  
  
          }
      )
  
  
  
  
  }
  
  
function start(){

bgContext.fillStyle = "#000000";
bgContext.font = '300px impact';
bgContext.fillText(keyword, 85, 275);

getCoords();
}

function getCoords(){
var imageData,pixel,height,weight;	
imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);
		
// quickly iterate over all pixels - leaving density gaps

for(height = 0; height < bgCanvas.height; height += denseness){
    for(width = 0; width < bgCanvas.width; width += denseness){   
       pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
          //Pixel is black from being drawn on. 
          if(pixel == 255) {
            drawCircle(width, height);
          }
    }
}
setInterval( update, 40 );
}
const initializeBoard=()=>{
    // var banner = new Banner();
    // banner.initialize('myCanvas');
   var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "45px Arial";
        var gradient = ctx.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop("0", "white");
        gradient.addColorStop("0.5" ,"#f1f3ce");
        gradient.addColorStop("1.0", "#fdfcfe");

// Fill with gradient
        ctx.strokeStyle = gradient;
        ctx.strokeText("Connect 4", 20, 50);
    let $div = $("#board");
    for(let i=0;i<42;i++){
        let id='canvasCell'+i;
        let $cell = $('<canvas/>',{
            class: 'canvasCell',id:id
        });
        $cell.width(120).height(70)
        $cell.appendTo($div);
        let c = document.getElementById(id);
        let ctx2 = c.getContext("2d");
        let centerX=c/2;
        let centerY=c/2;

        let radius = 70;
        ctx2.beginPath();
        ctx2.arc(150, 75, radius, 0, 2 * Math.PI, false);
        ctx2.fillStyle = 'white';
        ctx2.fill();
        ctx2.lineWidth = 5;
        ctx2.strokeStyle = '#003300';
        ctx2.stroke();

        
     
    }
  }
initializeBoard();
let $myPics = $("#piece");        
let $myPicscell = $('<canvas/>',{
class: 'Picscell',id:'Picscell'
});
$myPicscell.width(120).height(70)
$myPicscell.appendTo($myPics);
let c = document.getElementById('Picscell');
let ctx3 = c.getContext("2d");
let centerX=c/2;
let centerY=c/2;

let radius = 70;
ctx3.beginPath();
ctx3.arc(150, 75, radius, 0, 2 * Math.PI, false);
ctx3.fillStyle = 'red';
ctx3.fill();
ctx3.lineWidth = 5;
ctx3.strokeStyle = '#003300';
ctx3.stroke();



});