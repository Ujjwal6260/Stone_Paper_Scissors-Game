let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options =["Stone","Paper","Scissors"]
    const rndmInx = Math.floor(Math.random() *3);
    return options[rndmInx];
  
}

const drawGame = () =>{
    msg.innerText ="Game Draw ! Play Again."
    msg.style.backgroundColor="purple";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lost !${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}


const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //Genrate computer choice
    const compChoice =genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice ==="Stone"){
            //Paper,Scissors
            userWin = compChoice ==="Paper" ? false : true;
        }else if(userChoice ==="Paper")
        {
            //stone,Scissors
            userWin = compChoice ==="Scissors" ? false : true;
        } else{
            //Stone,Paper
            userWin = compChoice ==="Stone" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});