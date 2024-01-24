let userScore= 0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];  
};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText="Game was Draw. Play Again. ";
    //msg.style.backgroundColor = "rgb(2,0,36)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log(`You Win! Your ${userChoice} beats ${compChoice}`);
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
       // msg.style.backgroundColor = "green"; // this will not work becz for #msg in css we have copied background code not a color code.
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log(`You Lose. ${compChoice} beats your ${userChoice}`);
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
       // msg.style.background = "red" 
        

    }
};

const playGame = (userChoice) => {
console.log("user choice: ", userChoice);
//generate computer choice
const compChoice=genCompChoice();
console.log("computer choice: ", compChoice);


if (userChoice === compChoice) {
    //draw game
drawGame();
} else {
    let userWin = true;
    if (userChoice === "Rock") {
        userWin = compChoice ==="Paper" ? false : true ;
    }
    else if(userChoice==="Paper") {
        userWin= compChoice==="Scissor" ? false : true ;
    }
    else{
        userWin= compChoice==="Rock" ? false : true ;
    }
    showWinner(userWin, userChoice, compChoice);
}

};

choices.forEach((choice) => {
   // console.log(choice);
    choice.addEventListener("click", ()=>{
       
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
}) 