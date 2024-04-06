
// listAZ and listZA MUST CONTAIN ALL LETTERS IN ORDER!!

let currentMoney = 2500;
const initialMoney = 2500;
// TODO camelcase this mf
let timetogoback = false;

// timeout will be false in A to Z, but true in Z to A
let timeout = false;

// TODO do stuff with this
// Boolean that turns true when the game is over
let isGameOver = false;

// Delay to pass to next question in milliseconds
const delayNext = 550; // TODO change to like 550 idk

// Time to get from A-Z and Z-A in milliseconds
const timeToFinish = 180000; // TODO change to 180000


// Main function that controls game flow
function gameManager(){

    document.addEventListener('keydown', quitGame());

    // Start the game: ENTER
    function pressStart(isAZ){

        const listener = function(event){
            if (event.key === 'Enter'){
                
                document.removeEventListener('keydown', listener);

                displayTime();
                displayBackBar();

                // Start the timer
                setTimeout(timeRanOut, timeToFinish);

                displayLetter(isAZ, 0);
                
            }
        }

        return listener;
    }

    // TODO write this in a neater way

    if(timetogoback === false){

        let isAZ = true;
    
        setupGame(isAZ); // true = direction to Z

        // Display the A, then B, ...
        document.addEventListener('keydown', pressStart(isAZ));

    }

    if(timetogoback === true){

        isAZ = false;

        setupGame(isAZ);

        document.addEventListener('keydown', pressStart(isAZ));

    }
    
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
    document.getElementById('timer').textContent = timeToFinish / 1000;
    document.getElementById('backbar').style.width = "100%";
    document.getElementById('backbar').style.backgroundColor = "rgb(168, 234, 127)";

    // Jackpot: set to the right amount
    if (isAZ){
        convertToBoxes(currentMoney);
    }
    else{

        // This condition should never be reached, I'm keeping it just to make sure
        if(currentMoney < 0){
            currentMoney = 0;
        }

        currentMoney = currentMoney + initialMoney;
        convertToBoxes(currentMoney);
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
function displayLetter(isAZ, currentIndex){

    let list;

    if(isAZ){
        list = listAZ;
    }
    else{
        list = listZA;
    }

    let letter = list[currentIndex].letter;

    // Get definition
    document.getElementById('def').innerHTML = list[currentIndex].definition;

    // Get word
    document.getElementById('guess').innerHTML = censorWord(list[currentIndex].word);

    // Highlight initial
    document.getElementById("box" + letter).style.backgroundColor = "rgb(126, 210, 0)";

    addOptions(isAZ, currentIndex, timeout);
}


// Add possible options of what's happening
// currentindex: B=0, B=1, C=2 etc for isAZ=true
async function addOptions(isAZ, currentIndex, timeoutEmergency){


    // TODO if we reached the end (Z), stop

    let list;

    if(isAZ){
        list = listAZ;
    }
    else{
        list = listZA;
    }

    const rawWord = list[currentIndex].word;

    const currLetter = list[currentIndex].letter;

    let word = censorWord(rawWord);



    let handleNext = (event) => pressNext(isAZ, currentIndex, event);
    let handleLettera = (event) => pressLettera(isAZ, word, event);
    let handleParola = (event) => pressParola(isAZ, word, event);

    document.addEventListener('keydown', handleNext);
    document.addEventListener('keydown', handleLettera);
    document.addEventListener('keydown', handleParola);

    function removeListeners() {
        document.removeEventListener('keydown', handleNext);
        document.removeEventListener('keydown', handleLettera);
        document.removeEventListener('keydown', handleParola);
    }

    async function pressNext(isAZ, currentIndex, event) {
        
        if (event.key === 'Enter') {
            
            removeListeners();

            document.getElementById('guess').innerHTML = rawWord;

            await delay(delayNext);

            // checking stage of game
            let keepgoing;
            if(timeout != isAZ){
                keepgoing = true;
            }
            else{
                keepgoing = false;
            }

            if(keepgoing){

                document.getElementById("box" + currLetter).style.backgroundColor = "rgb(132, 132, 132)";

                if(currentIndex+1 < list.length){

                    displayLetter(isAZ, currentIndex + 1);

                }
                else{

                    if (isAZ){
                        timetogoback = true;
                        timeout = true;
                        gameManager();
                    }
                    else{
                        // TODO winning/losing screen
                        console.log('Game finished!!!');
                    }

                }
            }

        }
    }

    function pressLettera(isAZ, word, event) {
        
        if (event.key === 'l' || event.key === 'L') {

            // TODO remove this
            console.log('hereLETTER');

            if(dashCounter(word) > 0){
                if(currentMoney - 100 > 0){
                    // TODO convert 100 into a global variable
                    currentMoney = currentMoney - 100;

                    convertToBoxes(currentMoney);

                    word = uncensorLetter(word, rawWord);
                    word = spaceWord(word);
                    document.getElementById('guess').innerHTML = word;
                    document.removeEventListener('keydown', handleLettera);
                    document.removeEventListener('keydown', handleParola);
                    handleLettera = (event) => pressLettera(isAZ, word, event);
                    handleParola = (event) => pressParola(isAZ, word, event);
                    document.addEventListener('keydown', handleLettera);
                    document.addEventListener('keydown', handleParola);
                }
                else{
                    console.log('no more money whats up LETTERA');
                }
            }
        }

    }

    function pressParola(isAZ, word, event) {
        
        if (event.key === 'p' || event.key === 'P') {

            // TODO remove this
            console.log('hereWORD');

            const dashes = dashCounter(word);
            if(dashes > 0){
                if(currentMoney - (100*dashes) > 0){
                    // TODO convert 100 into a global variable
                    currentMoney = currentMoney - (100*dashes);

                    convertToBoxes(currentMoney);

                    document.getElementById('guess').innerHTML = rawWord;

                    document.removeEventListener('keydown', handleLettera);
                    document.removeEventListener('keydown', handleParola);
                }
                else{
                    console.log('no more money whats up PAROLA VERSION');
                }
            }

        }
    }



}

function quitGame(){

    const listener = function(event){
        if (event.key === 'q' || event.key === 'Q'){

            document.removeEventListener('keydown', listener);
            location.reload();
            
        }
    }

    return listener;
}

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function timeRanOut() {

    // TODO change this

    if(!timetogoback){

        await delay(delayNext);

        timeout = true;

        currentMoney = 0;

        console.log('TIME is up');

        timetogoback = true;
        gameManager();

    }
    else{

        // TODO final screen
        console.log('You lost on time lmfao');

        // TODO end everything

    }
}

function displayTime(){

    let goBack = timetogoback;
    
    let timeLeft = timeToFinish / 1000;
    const displayElement = document.getElementById('timer');

    function updateTimeDisplay() {
        displayElement.textContent = timeLeft;
    }

    const countdownInterval = setInterval(() => {
        timeLeft--;
        updateTimeDisplay();
        
        if (timeLeft <= 0 || goBack != timetogoback) {

            if(goBack != timetogoback){
                displayElement.textContent = timeToFinish / 1000;
            }

            clearInterval(countdownInterval);
            console.log('Time is up FROM INSIDE THE DISPLAYTIME!!');
        }
      }, 1000);
}

function displayBackBar(){

    let goBack = timetogoback;

    let timeLeft = timeToFinish / 100;
    
    function updateBackBar(){

        const newWidth = ((timeLeft/(timeToFinish/100)) * 100);

        if (newWidth < 15){
            document.getElementById('backbar').style.backgroundColor = "rgb(255, 70, 70)";
        }

        document.getElementById('backbar').style.width = newWidth + '%';

    }

    const countdownInterval = setInterval(() => {
        timeLeft--;
        updateBackBar();
        
        if (timeLeft <= 0 || goBack != timetogoback) {

            if(goBack != timetogoback){
                document.getElementById('backbar').style.width = "100%";
                document.getElementById('backbar').style.backgroundColor = "rgb(168, 234, 127)";
            }

            clearInterval(countdownInterval);
            console.log('Time is up FROM BACKBAR!!');
        }
      }, 100);
}



// EXECUTING vvv
gameManager();