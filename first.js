const boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn")

let turn0=true;
const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn0=true;
    isgameover=false;
    enableboxes();
    msgcontainer.classList.add("hide")
    drawcontainer.classList.add("hide")
};
const disableboxes=()=>{
    boxes.forEach(box=>box.disabled=true)
};
const enableboxes=()=>{
    for(let box of boxes){
    box.disabled=false;
     box.innerText="";
}
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     console.log("box was clicked") ;
     if(turn0){
        box.innerText="o";
        turn0=false;
     } 
     else{
        box.style.color="blue";
        box.innerText="x";
       turn0=true;
     } 
    box.disabled=true;
    checkWinner();
    })
});
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const showwinner=(winner)=>{
    msg.innerText=`" congratulations ${winner} you are the winner"`;
    msgcontainer.classList.remove("hide")
};
let isgameover=false;
const checkWinner=()=>{
    for(let pattern of winningpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=="" && pos2val!=="" && pos3val!==""){
            if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val)
            showwinner(pos1val);
            disableboxes()
            isgameover=true;
            return;
                }
            }
        }
    if(!isgameover)
   {let allfilled=true;
    boxes.forEach((box)=>{
        if(box.innerText===""){
            allfilled=false;
        }
    });
    if(allfilled){
        console.log("Draw");
            drawcontainer.classList.remove("hide");
            isgameover=true
    }
}
}

newgamebtn.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);
let drawcontainer=document.querySelector(".draw-container");
let draw=document.querySelector("#again");
draw.addEventListener("click",()=>{
    drawcontainer.classList.add("hide");
    resetgame()
})






