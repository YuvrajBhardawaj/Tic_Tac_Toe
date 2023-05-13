console.log("Welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let gameover=new Audio("gameover.mp3");
let turnMusic=new Audio("ting.mp3");
let turn="X";//Function to change the turn
const changeTurn=()=>{
    return turn=="X"?"0":"X";
};

//Function to check the winner
let isGameOver=false;
const CheckWin=()=>{
    let boxtext=document.querySelectorAll(".boxtext");  //either use querySelectorAll or getElementsByClassName
    let wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[0,4,8],[2,4,6],
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[1]].innerText == boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!="")){
            document.getElementsByClassName("info")[0].innerText=boxtext[e[0]].innerText+" Won the game";
            isGameOver=true;
            gameover.play();
            music.pause();
            boxtext[e[0]].style.backgroundColor='#d3f56c';
            boxtext[e[1]].style.backgroundColor='#d3f56c';
            boxtext[e[2]].style.backgroundColor='#d3f56c';
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px';
        }
    });
};

//Tie Condition
const boardFull = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let isFull = true;
    Array.from(boxtext).forEach((e) => {
      if (e.innerText == "") {
        isFull = false;
      }
    });
    return isFull;
  };
  
const tieCheck=()=>{
    if(boardFull() && !isGameOver){
        document.getElementsByClassName("info")[0].innerText="It's a Tie";
        document.querySelector('.imgbox').getElementsByTagName('img')[1].style.width='200px';
        isGameOver=true;
        gameover.play();
    }
};
//Game LOgic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText=='')
        {
            boxtext.innerText=turn;
            turn=changeTurn();
            music.play();
            turnMusic.play();
            CheckWin();
            tieCheck();
            if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText= "Its your turn "+turn;
            }
        }
    });
});

//Add reset eventListener
let reset=document.getElementsByClassName('reset')[0];
reset.addEventListener('click',()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    isGameOver=false;
    document.getElementsByClassName("info")[0].innerText= "Its your turn "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='0px';
    document.querySelector('.imgbox').getElementsByTagName('img')[1].style.width='0px';
    let wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7],[0,4,8],[2,4,6],
    ];
    boxtext[0].style.backgroundColor='';
    boxtext[1].style.backgroundColor='';
    boxtext[2].style.backgroundColor='';
    boxtext[3].style.backgroundColor='';
    boxtext[4].style.backgroundColor='';
    boxtext[5].style.backgroundColor='';
    boxtext[6].style.backgroundColor='';
    boxtext[7].style.backgroundColor='';
    boxtext[8].style.backgroundColor='';
});