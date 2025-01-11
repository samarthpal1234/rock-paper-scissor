let userScore= 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice") ;
const msg =document.querySelector("#msg");
const userScorepara=document.querySelector("#user");
const compScorepara=document.querySelector("#comp");

drawgame=()=>
{
    console.log("game draw");
    msg.innerText="you draw"

}
const showwinner=(userwin)=>
{
if(userwin)
{
    userScore++;
    userScorepara.innerText=userScore;
    console.log("you win");
    msg.innerText="you win";
 
}
else
{
    compScore++; 
    compScorepara.innerText=compScore;

    console.log("you lose");
    msg.innerText="you lose"

}
}
const gencompchoice=()=>
{
    const option=["rock","paper","scissor"];
    const randmidx=Math.floor(Math.random()*3);
    return option[randmidx];
}
const playgame =(userchoice)=>
{
    console.log("user choice=",userchoice);
    const compchoice =gencompchoice();
    console.log("compchoice=",compchoice);
    if(userchoice=== compchoice)
        {
            drawgame();
        }else
        {
            let userwin=true;
            if(userchoice==="rock")
            {
                //scissor,paper
               userwin= compchoice==="paper"?false:true;
            }
            else if(userchoice==="paper")
            {
                //rock,scissor
                userwin=compchoice==="scissor"?false:true;
            }
            else
            {
                //rock,paper
            userwin=    compchoice==="rock"?false:true;
            }
            showwinner(userwin);
        }
        
};


choices. forEach((choice)=>{
    choice.addEventListener("click",()=>
{
    const userchoice=choice.getAttribute("id");
 playgame(userchoice);
    
});
});