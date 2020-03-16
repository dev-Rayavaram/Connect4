$(()=>{
    let width,height,radius;
    let gameOver=false;
    let currentPlayer;
    let gameObject=[];
    let newGame=true;
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
     const findLastFilledElement=(list,color)=>{
       console.log("findLastFilledElement");
       for(let i=list.length-1;i>0;i--){
          //  console.log("inside");
            let $cell = $(list[i]);
          //  console.log("cell");
           // console.log($cell);

            if($cell.hasClass('empty')){
                let index= $($cell).attr('id');
             //   console.log("index: "+index);
                newGame=false;
                drawCircle(index,width,height,radius,color);
                $cell.removeClass('empty');
                $cell.addClass(`${currentPlayer}`);
                gameOver=checkGameStatus(index);

                if(currentPlayer ==="player1"){
                    currentPlayer ="computer";
                    //create random event at random index
                    let randomIndex = Math.floor((Math.random()*7));
                    let randomId =`canvasCell[${randomIndex}][0]`;
                 //   console.log("randomId");
                //    console.log(randomId);
                    let randomCell =document.getElementById(`${randomId}`);
                    const mouseClickEvent = new Event('click');
                    randomCell.dispatchEvent(mouseClickEvent);

                }
                else if(currentPlayer ==="computer"){
                    
                    currentPlayer ="player1";
                }

                break;
        }
    }
}
const checkDiagonal=(colIndex,rowIndex)=>{
    gameObject=[];
    let element = {};
    if(!newGame){
         let nextIndex=1;
        let colInt=parseInt(colIndex);
        let rowInt=parseInt(rowIndex);
       // console.log("colInt"+rowInt);
        if(colInt==0 && rowInt==1){
            gameObject.push({col:0,row:1});
            gameObject.push({col:1,row:2});
            gameObject.push({col:2,row:3});
            gameObject.push({col:3,row:4});

        }
        else if(colInt==0 && rowInt==6)
        {
                gameObject.push({col:0,row:6});
                gameObject.push({col:1,row:5});
                gameObject.push({col:2,row:4});
                gameObject.push({col:3,row:3});
    
        }
        else if(colInt==6 && rowInt==1)
        {
                gameObject.push({col:6,row:1});
                gameObject.push({col:5,row:2});
                gameObject.push({col:4,row:3});
                gameObject.push({col:3,row:4});
    
        }
        else if(colInt==6 && rowInt==6)
        {
                gameObject.push({col:6,row:6});
                gameObject.push({col:5,row:5});
                gameObject.push({col:4,row:4});
                gameObject.push({col:3,row:3});
    
        }
        gameStatus(gameObject);       
    }

}
const checkHorizontal=(colIndex,rowIndex)=>{
    gameObject=[];
    let element = {};
    if(!newGame){
         let nextIndex=1;
        let colInt=parseInt(colIndex);
        let rowInt=parseInt(rowIndex);
       // console.log("colInt"+rowInt);

        switch(colInt){
            case 7:
            //    console.log("case 7");
                    for(let i=colInt-4;i<=colInt;i++){
                        let temp={};
           //             console.log("inside for loop"+i);
                        temp.col = i;
                        temp.row = rowInt;
                        gameObject.push(temp);
                        nextIndex++; 
                    }
                break;
 
            case 6:
        //        console.log("case 6");
                    for(let i=colInt-3;i<=colInt+1;i++){
                        let temp={};
        //                console.log("inside for loop"+i);
                        temp.col = i;
                        temp.row = rowInt;
                        gameObject.push(temp);
                        nextIndex++; 
                    }
                break;
            case 5:
        //        console.log("case 5");

                for(let i=colInt-3;i<=colInt+2;i++){
                    let temp={};
        //            console.log("inside for loop"+i);
                    temp.col = i;
                    temp.row = rowInt;
                    gameObject.push(temp);
                     nextIndex++;              
            }
    
                break;
            case 4:
        //        console.log("case 4");
                    for(let i=colInt-3;i<=colInt+2;i++){
                        let temp={};
        //                console.log("inside for loop"+i);
                        temp.col = i;
                        temp.row = rowInt;
                        gameObject.push(temp);
                        nextIndex++;
              
                    }
                   break;
            case 3:
        //        console.log("case 3");

                    for(let i=colInt-2;i<=colInt+3;i++){
                        let temp={};
         //               console.log("inside for loop"+i);
                        temp.col = i;
                        temp.row = rowInt;
                        gameObject.push(temp);
                        nextIndex++;              
                    }
                   break;
       
                case 2:
        //            console.log("case 2");

                    for(let i=colInt-1;i<=colInt+3;i++){
                        let temp={};

        //                console.log("inside for loop"+i);
                        temp.col = i;
                        temp.row = rowInt;
                        gameObject.push(temp);
                        nextIndex++;              
                    }
                   break;
       
                   case 1:
        //            console.log("case 1");

                    for(let i=colInt;i<=colInt+3;i++){
                        let temp={};
        //                console.log("inside for loop"+i);
                        temp.col = i;
                        temp.row = rowInt;
                        gameObject.push(temp);
                        nextIndex++;              
                    }
                   break;
                   default:
                       break;  
    
            }
          gameStatus(gameObject);
        }
   
}
const checkVertical=(colIndex,rowIndex)=>{
    gameObject=[];
    let element = {};
    if(!newGame){
         let nextIndex=1;
        let rowInt=parseInt(rowIndex);
        let colInt=parseInt(colIndex);

        switch(rowInt){
            case 6:
              //  console.log("case 6");
                    for(let i=rowInt-3;i<=rowInt;i++){
                        let temp={};
                    //    console.log("inside for loop"+i);
                        temp.col = colIndex;
                        temp.row = i;
                        gameObject.push(temp);
                        nextIndex++; 
                    }
                break;
            case 5:
            //    console.log("case 5");

                for(let i=rowInt-3;i<=rowInt+1;i++){
                    let temp={};
            //        console.log("inside for loop"+i);
                    temp.col = colIndex;
                    temp.row = i;
                    gameObject.push(temp);
                     nextIndex++;              
            }
    
                break;
            case 4:
            //    console.log("case 4");
                    for(let i=rowInt-3;i<=rowInt+2;i++){
                        let temp={};
            //            console.log("inside for loop"+i);
                        temp.col = colIndex;
                        temp.row = i;
                        gameObject.push(temp);
                        nextIndex++;
              
                    }
                   break;
            case 3:
            //    console.log("case 3");

                    for(let i=rowInt-2;i<=rowInt+3;i++){
                        let temp={};
                //        console.log("inside for loop"+i);
                        temp.col = colIndex;
                        temp.row = i;
                        gameObject.push(temp);
                        nextIndex++;              
                    }
                   break;
       
                case 2:
                //    console.log("case 2");

                    for(let i=rowInt-1;i<=rowInt+3;i++){
                        let temp={};

                //        console.log("inside for loop"+i);
                        temp.col = colIndex;
                        temp.row = i;
                        gameObject.push(temp);
                        nextIndex++;              
                    }
                   break;
       
                   case 1:
            //        console.log("case 1");

                    for(let i=rowInt;i<=rowInt+3;i++){
                        let temp={};
            //            console.log("inside for loop"+i);
                        temp.col = colIndex;
                        temp.row = i;
                        gameObject.push(temp);
                        nextIndex++;              
                    }
                   break;
                   default:
                       break;     
            }
    
           // console.log("gameObject is");
           // console.log(gameObject);
            gameStatus(gameObject);
        }
     }
     const gameStatus=(gameObject)=>{
         for(let i=0;i<gameObject.length;i++){
             let gameObjectId = `canvasCell[${gameObject[i].col}][${gameObject[i].row}]`;
             let element=document.getElementById(gameObjectId);
            // console.log("gameObjectId");
            // console.log(gameObjectId);
            // console.log("element");
            // console.log(element);
             if(element!=null){
                let className = element.getAttribute('class');
                gameObject[i].id=gameObjectId;
                gameObject[i].class=className;           
   
             }
          }

             //check if middle piece matches then we dont have to make unnecessary loops to findout that lines do not match
                let middleIndex =Math.floor(gameObject.length/2);
                let gameCounter=1;

                    if(((gameObject[middleIndex]!=null && gameObject[middleIndex]!=null)&&(gameObject[middleIndex].class == gameObject[middleIndex+1].class )) || ((gameObject[middleIndex]!=null && gameObject[middleIndex-1]!=null)&&(gameObject[middleIndex].class == gameObject[middleIndex-1].class)))
                        {
                            console.log("middle items are matching");
                            //middle items match search continues further
                            for(let i=0;i<gameObject.length-1;i++){
                                if(gameObject[i].class == gameObject[i+1].class){
                                    gameCounter++;
                                    console.log("gameCounter: "+gameCounter);
                                }
                                else{
                                    gameCounter=1;
                                }
                                if(gameCounter>=4){
                                    gameOver=true;
                                    alert(`${gameObject[i].class} won the game`);
                                    break;
                                }
                                
                            }
                        }
                        else{
                            gameOver=false; 
                        }

     }
    
    const checkGameStatus=(index)=>{
     //   console.log("inside checkGameStatus");
        const colData = document.getElementById(index).getAttribute('col');
        const rowData = document.getElementById(index).getAttribute('row'); 
       // console.log(`colData ${colData} rowData ${rowData}`);
        checkVertical(colData,rowData);
        checkHorizontal(colData,rowData);
        checkDiagonal(colData,rowData);
        return gameOver;
    }
    const game=(event)=>{
        if(gameOver==true){
            alert("Game is Over RESET the game and click START to play");
        }
        else{

            //console.log(event);
            const colData = $(event).attr('col');
            const rowData = $(event).attr('row');
            let columnsList = $(`.col${colData}`);
            // console.log(columnsList);
            if(currentPlayer ==="player1"){
                findLastFilledElement(columnsList,'red');
            }
            else{
                findLastFilledElement(columnsList,'yellow');
            }

        }
  
    }
    const mouseClick= function(){
        event.preventDefault();

         game(this);
      //  console.log(col);
      //  drawCircle(col,width,height,radius,'red');
    }
    const start=()=>{
        alert("You are the first Player and your color RED");

       console.log("inside start");
       const $board =$('.col');
       $board.on('click',mouseClick);    
   } 
   const stop=()=>{
    console.log("inside stop");
    const $board =$('.col');
    $board.off('click',mouseClick);
   }
   const reset=()=>{
       console.log("inside reset");
       window.location.reload();
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
let resetBtn = document.getElementById("reset").addEventListener('click',reset);


});