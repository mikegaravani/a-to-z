
// Censor the word except its initial
function censorWord(word){

    let censored = word[0] + ' ' + '- '.repeat(word.length - 1).trim();
    return censored;

}

// Pick random censored letter to uncensor
function uncensorLetter(censWord, fullWord){

    // remove spaces in the word
    let word = censWord.replace(/\s+/g, '');

    // count dashes in word
    let dashes = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === '-') {
            dashes++;
        }
    }
    if (dashes <= 1){
        return (fullWord);
    }

    // pick a random dash
    const randomDash = Math.floor(Math.random() * dashes) + 1;

    // uncensor the random dash
    const index = indexOfNthDash(word, randomDash);
    const newletter = fullWord[index];
    return (word.substring(0, index) + newletter + word.substring(index + 1));

}


// returns the index of the nth dash
function indexOfNthDash(word, n) {
    let dashCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === '-') {
            dashCount++;
            if (dashCount === n) {
                return i;
            }
        }
    }
    
    // Return -1 if the nth dash doesn't exist
    return -1;
}

// space out the word accordingly
function spaceWord(censWord) {

    // Remove initial spaces from the word for simplicity
    let word = censWord.replace(/\s+/g, '');

    // Initialize an array to build the new word
    let spacedWord = [];

    // Iterate through each character in the word.
    for (let i = 0; i < word.length; i++) {
        spacedWord.push(word[i]);
        if ((word[i] === '-' || (i + 1 < word.length && word[i + 1] === '-')) && i !== word.length - 1) {
            spacedWord.push(' ');
        }
    }

    // Join the array elements into a string and return.
    let result = spacedWord.join('');
    return result.trim();
}

function dashCounter(word){
    let dashes = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === '-') {
            dashes++;
        }
    }
    return dashes;
}