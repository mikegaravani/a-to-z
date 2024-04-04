
// listAZ and listZA MUST CONTAIN ALL LETTERS IN ORDER!!

let currentMoney = 2500;
let initialMoney = 2500;
let timetogoback = false;


// Main function that controls game flow
function gameManager(){

    document.addEventListener('keydown', quitGame());

    // Start the game: ENTER
    function pressStart(isAZ){

        const listener = function(event){
            if (event.key === 'Enter'){
                
                document.removeEventListener('keydown', listener);
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
    // TODO SET TIMER TO 180

    // Jackpot: set to the right amount
    if (isAZ){
        convertToBoxes(currentMoney);
    }
    else{

        // TODO FIX BUG where if player has $100 but wins AZ round, it shows 2500 instead of 2600

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

    addOptions(isAZ, currentIndex);
}


// Add possible options of what's happening
// currentindex: B=0, B=1, C=2 etc for isAZ=true
function addOptions(isAZ, currentIndex){

    // TODO if we reached the end (Z), stop

    let list;

    if(isAZ){
        list = listAZ;
    }
    else{
        list = listZA;
    }

    const defin = list[currentIndex].definition;

    const rawWord = list[currentIndex].word;

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

    function pressNext(isAZ, currentIndex, event) {
        
        if (event.key === 'Enter') {
            
            removeListeners();

            if(currentIndex+1 < list.length){

                displayLetter(isAZ, currentIndex + 1);

            }
            else{

                if (isAZ){
                    timetogoback = true;
                    gameManager();
                }
                else{
                    // TODO winning/losing screen
                    console.log('Game finished!!!');
                }

            }
            
            // TODO show word and ONLY THEN pass to the next one

            // TODO COLOR LETTER BEFORE IN DARK GREY

        }
    }

    function pressLettera(isAZ, word, event) {
        
        if (event.key === 'l' || event.key === 'L') {

            // TODO remove this
            console.log('hereLETTER');

            if(dashCounter(word) > 0){
                // TODO convert 100 into a global variable
                currentMoney = currentMoney - 100;
            }

            if(currentMoney < 100){
                console.log('no more money whats up');
            }
            else{

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





// EXECUTING vvv
gameManager();