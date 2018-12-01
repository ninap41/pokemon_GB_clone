function toggleAudio( value){
    playMusic === true ? playMusic === false : playMusic === true ; //affects if music is played in next world
    currentTrack[value](); // whether pause of play etc.
}

function toggleView(){
    el_arr = ['gameboy', 'border', 'viewport']
    var viewport = document.getElementById('viewport');
    var gameboy = document.getElementById('gameboy');
    var border = document.getElementById('border');
    gameboy.style.backgroundColor === 'rgba(0, 0, 0, 0)' ? gameboy.style.backgroundColor = 'red' :  gameboy.style.backgroundColor  = 'rgba(0, 0, 0, 0)';
    border.style.backgroundColor === 'rgba(0, 0, 0, 0)' ? border.style.backgroundColor  = 'black' :  border.style.backgroundColor  = 'rgba(0, 0, 0, 0)';
    viewport.style.overflow === 'visible' ? viewport.style.overflow = 'hidden' :  viewport.style.overflow = 'visible';
}