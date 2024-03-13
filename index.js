
// // user attempt
// let attempts = 0;

// // max attempts
// const maxAttempts = 5;

// //get your guess number from the input
// const inputVal = document.querySelector("input")

// // get your button element
// const inputButton = document.getElementsByClassName("btn")[0]

// //generate a guess
// const actualGuess = 10;

// // function for attemptCheck
// function checkAttempts(){
//     if (attempts < maxAttempts){
//        let userGuess = document.querySelector("input").value;
//        if (attempts < maxAttempts){
//         attempts++

//         if (Number(userGuess) === actualGuess){
//             alert("correct guess, nice job");
//         }
//         //else if guess is not the same, user loses
//         else if (userGuess !== actualGuess){
//             alert("wrong guess, try again");
//         }
//     }
//     else {alert("input is empty")}
//     }

// }

// //check if guess is the same with user

// //if guess is the same, user win

// inputButton.addEventListener("click", function (){
//     checkAttempts(inputVal.value, actualGuess);
// });


let attempts = 0;

const maxAttempts = 5;

const actualGuess = 10;

function checkAttempts(userGuess){
    if (userGuess === ""){
        alert("input is empty");
    } else {
        attempts++;
        updateAttemptsDisplay();
        if (attempts < maxAttempts && Number(userGuess) === actualGuess){
            alert("correct guess, nice job. Game Over!" );
            disableButton();
            changeButtoncolor();
        } else if (attempts === maxAttempts && Number(userGuess) !== actualGuess){
            alert("wrong guess, trial is over");
            disableButton();
            changeButtoncolor();
        } else if (attempts < maxAttempts && Number(userGuess) !== actualGuess){
            alert("wrong guess, try again");
        } else if (attempts === maxAttempts && Number(userGuess) === actualGuess){
            alert("correct guess, you are in luck");
            changeButtoncolor();
        }
    }
}

function disableButton(){
    inputButton.disabled = true;
}

function changeButtoncolor(){
    inputButton.style.backgroundColor = "grey";
}

function updateAttemptsDisplay(){
    const chances = document.getElementById("chances")
    const attemptRemain = maxAttempts - attempts;
    chances.textContent = `you have ${attemptRemain} attempts${attemptRemain === 1 ? '' : ''} left`;
}

const inputVal = document.querySelector("input");
const inputButton = document.getElementsByClassName("btn")[0]

inputButton.addEventListener("click", function(){
    checkAttempts(inputVal.value);
});