
// Start the game: ENTER
function pressStart(isAZ){
    return function(event){
        if (event.key === 'Enter'){
            // TODO REMOVE LOGs
            console.log('enter pressed');
            displayFirstLetter(isAZ);
        }
    }
}