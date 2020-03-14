$(()=>{
    const drawCircle = (id,width,height,radius,color)=>{
        let c = document.getElementById(id);
        let ctx2 = c.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(width, height, radius, 0, 2 * Math.PI, false);
        ctx2.fillStyle = color;
        ctx2.fill();
        ctx2.lineWidth = width/100;
        ctx2.strokeStyle = '#003300';
        ctx2.stroke();
    }
    
const initializeBoard=()=>{
   
//    var c = document.getElementById("myCanvas");
//         var ctx = c.getContext("2d");
//         ctx.font = "45px Arial";
//         var gradient = ctx.createLinearGradient(0, 0, 170, 0);
//         gradient.addColorStop("0", "white");
//         gradient.addColorStop("0.5" ,"#f1f3ce");
//         gradient.addColorStop("1.0", "#fdfcfe");

// // Fill with gradient
//         ctx.strokeStyle = gradient;
//         ctx.strokeText("Connect 4", 20, 50);
    let $div = $("#board");
    let width = ($(document).width())/10;
    let height =($(document).height())/10;
    let radius=height-height/5;
    console.log("width is:"+width);
    console.log("height is:"+height);

    for(let i=0;i<42;i++){
        let id='canvasCell'+i;
        let $cell = $('<canvas/>',{
            class: 'canvasCell',id:id
        });
        $cell.width(width).height(height)
        $cell.appendTo($div);
        drawCircle(id,width,height,radius,'white');
     }
     let $myPics = $("#piece");        
    let $myPicscell = $('<canvas/>',{
    class: 'Picscell',id:'Picscell'
    });
    $myPicscell.width(width).height(height)
    $myPicscell.appendTo($myPics);
    drawCircle('Picscell',width,height,radius,'red');
   
  }
initializeBoard();


});