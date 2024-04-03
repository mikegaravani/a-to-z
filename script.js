
// listAZ and listZA MUST CONTAIN ALL LETTERS IN ORDER!!

let currentMoney = 2500;
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
    document.getElementById('guess').innerHTML = censorWord(list[0].word);

    // Highlight initial
    document.getElementById("box" + letter).style.backgroundColor = "rgb(126, 210, 0)";
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

    const rawWord = list[currentIndex].word

    let word = censorWord(rawWord);



    const handleNext = (event) => pressNext(isAZ, currentIndex, event);
    const handleLettera = (event) => pressLettera(isAZ, word, event);
    const handleParola = (event) => pressParola(isAZ, word, event);

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
            
            // TODO add next letter

            removeListeners();
        }
    }

    function pressLettera(isAZ, word, event) {
        
        if (event.key === 'l' || event.key === 'L') {

            word = uncensorLetter(word, rawWord);
            document.getElementById('guess').innerHTML = word;

            document.removeEventListener('keydown', handleLettera);
        }

    }

    function pressParola(isAZ, event) {
        
        if (event.key === 'p' || event.key === 'P') {

            document.getElementById('guess').innerHTML = rawWord;

            document.removeEventListener('keydown', handleLettera);
            document.removeEventListener('keydown', handleParola);

        }
    }

}





// EXECUTING vvv

gameManager();

// TODO remove this
function yeet(isAZ){
    console.log(listAZ[3].definition);
}