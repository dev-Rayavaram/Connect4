$(()=>{
    let width,height,radius;
    let gameOver=false;
    let currentPlayer;
    let board={

    }
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
    const move=()=>{
        alert("move the piece");
    }
    const play=()=>{
        alert("play the piece");
     
    }
    const mouseENTER= function(){
       // console.log("element");
        
        const col =$(this)[0].id;
        if(currentPlayer === "player1"){
            let element = document.getElementById(col);
            console.log(element);
                element.classList.remove('computer');
                element.classList.add('player1');
        }
        else if(currentPlayer === "computer"){
            let element = document.getElementById(col);
                element.classList.remove('player1');
                element.classList.add('computer');

        }
            
      //  document.getElementById(col).setAttribute('class','hover')
    }
    const findLastFilledElement=(list,color)=>{
       console.log("findLastFilledElement");
       for(let i=list.length-1;i>0;i--){
            console.log("inside")
            let $cell = $(list[i]);
            console.log("cell");
            console.log($cell);

            if($cell.hasClass('empty')){
                let index= $($cell).attr('id');
                console.log("index: "+index);
                drawCircle(index,width,height,radius,color);
                $cell.removeClass('empty');
                if(currentPlayer ==="player1"){
                    currentPlayer ="computer";
                }
                else if(currentPlayer ==="computer"){
                    currentPlayer ="player1";
                }

                break;
        }
    }
}
    const checkGameStatus=()=>{

    }
    const game=(event)=>{
        console.log(event);
        const colData = $(event).attr('col');
        const rowData = $(event).attr('row');
        let columnsList = $(`.col${colData}`);
        console.log(columnsList);
        if(currentPlayer ==="player1"){
            findLastFilledElement(columnsList,'red');
        }
        else{
            findLastFilledElement(columnsList,'yellow');
        }
        checkGameStatus();

      

    }
    const mouseClick= function(){
         game(this);
      //  console.log(col);
      //  drawCircle(col,width,height,radius,'red');
    }
    const mouseOUT= function(){
        const col =$(this)[0].id;
       // document.getElementById(col).setAttribute('class','hidden')
       // drawCircle(col,width,height,radius,'hidden');

    }
   const start=()=>{
       console.log("inside start");
       const $board =$('.col');
       $board.on('mouseover',mouseENTER);
       $board.on('click',mouseClick);

       $board.on('mouseout',mouseOUT);
    
   } 
   const stop=()=>{
    console.log("inside stop");
    const $board =$('.col');
    $board.off('mouseenter',mouseENTER);
    $board.off('click',mouseClick);

    $board.off('mouseout',mouseOUT);
   }
const initializeBoard=()=>{
 
    let $div = $("#board");
    width = ($(document).width())/10;
    height =($(document).height())/10;
    radius=height-height/5;
    console.log("width is:"+width);
    console.log("height is:"+height);
    let index=0;
    let id='';
    let $zeroRow = $('#piece');

    for(let k=0;k<7;k++){
        let indexZero=`canvasCell[${k}][0]`;
        const $colZero = $('<canvas>').addClass(`col${k} col empty`).attr('col',k).attr('row',0).attr('id',indexZero);
        $colZero.width(width).height(height);
        $colZero.width(width).height(height);
        $colZero.appendTo($zeroRow);
        $($colZero).click((event)=>{
           // console.log(event.target);
            
        });
    }
    for(let i=1;i<7;i++){
        id=id+i;
        const $row =$('<div>');
        $row.addClass('row');
        //  console.log("id :"+index);       
        for(var j=0;j<7;j++){
            index=`canvasCell[${j}][${i}]`;
          //  console.log("id :"+index);

            const $col = $('<canvas>').addClass(`col${j} col empty`).attr('col',j).attr('row',i).attr('id',index);
            $col.width(width).height(height);
            $col.width(width).height(height);
            $col.appendTo($div);
            $($col).click((event)=>{
               // console.log(event.target);
                
            });
            drawCircle(index,width,height,radius,'white');
    
        }
    }
    currentPlayer="player1";
   
  }
initializeBoard();
let startBtn = document.getElementById("start").addEventListener('click',start);
let stopBtn = document.getElementById("stop").addEventListener('click',stop);


});