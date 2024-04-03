// listAZ and listZA MUST CONTAIN ALL LETTERS IN ORDER!!

// global variables: saved capital at half of the game (initially 0)
let currentMoney = 2500;

// Game CONSTANTS
let initialMoney = 2500;


// Main function that controls game flow
function gameManager(){

    let isAZ = true;
    
    setupGame(isAZ); // true = direction to Z

    // Display the A
    document.addEventListener('keydown', pressStart(isAZ));

    // ...
}

// Sets up the game before starting the round
function setupGame(isAZ){

    // Design: everything blank
    document.getElementById('def').innerHTML = '';
    document.getElementById('guess').innerHTML = '';
    for(let i=1; i<=listAZ.length; i++){
        let currentletter = listAZ[i-1].letter;
        if (!isAZ){
            currentletter = listZA[i-1].letter;
        }
        document.getElementById("box" + currentletter).style.backgroundColor = "rgb(200, 200, 200)";
    }

    // Timer: set to 180 seconds
    // TODO SET TIMER TO 180

    // Jackpot: set to the right amount
    if (isAZ){
        convertToBoxes(currentMoney);
    }
    else{
        convertToBoxes(currentMoney + initialMoney);
    }
}

// Converts the given amount to 4 boxes
function convertToBoxes(money) {
    // Convert the money amount to a string and then to an array of its digits.
    let digits = money.toString().split('');
    
    // Calculate how many leading blanks we need by subtracting the number of digits from 4.
    let leadingBlanks = 4 - digits.length;
    
    // Fill the leading positions with blanks if the number has less than 4 digits.
    for (let i = 0; i < leadingBlanks; i++) {
        digits.unshift('');
    }
    
    // Assign the digits (or blanks) to the HTML elements with the respective IDs.
    document.getElementById('digit1').textContent = digits[0];
    document.getElementById('digit2').textContent = digits[1];
    document.getElementById('digit3').textContent = digits[2];
    document.getElementById('digit4').textContent = digits[3];
}

// Displays the first letter with its respective definition
function displayFirstLetter(isAZ){

    let letter = 'A';
    let list = listAZ;

    if (!isAZ){
        letter = 'Z';
        list = listZA;
    }

    // Get definition
    document.getElementById('def').innerHTML = list[0].definition;

    // Get word
    // TODO implement word censoring
    document.getElementById('guess').innerHTML = list[0].word;

    // Highlight initial
    document.getElementById("box" + letter).style.backgroundColor = "rgb(126, 210, 0)";
}





// EXECUTING vvv

gameManager();