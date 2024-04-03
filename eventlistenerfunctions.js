
// Start the game: ENTER
function pressStart(isAZ){

    const listener = function(event){
        if (event.key === 'Enter'){
            
            displayFirstLetter(isAZ);
            document.removeEventListener('keydown', listener );
        }
    }

    return listener;
}