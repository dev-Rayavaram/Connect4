$(()=>{
    const rows=6;//initialize number of rows and columns for the board
    const columns=7;   
    const initializeBoard=()=>{
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "30px Arial";
        var gradient = ctx.createLinearGradient(0, 0, 170, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5" ,"green");
        gradient.addColorStop("1.0", "purple");

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
});