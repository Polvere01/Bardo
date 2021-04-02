
var reproduzindoRain = false;
var reproduzindoCampFire = false;

function playAudioRain() {
    audioObj = document.getElementById("audio-rain")
    audioObj.loop = true;
    audioObj.volume = 0.2;

    if (reproduzindoRain == false) {
        audioObj.play();
        reproduzindoRain = true;
    }
    else{
        audioObj.pause();
        reproduzindoRain = false;
    }

}



function playAudioFire() {
    audioObj = document.getElementById("audio-fire")
    audioObj.loop = true;
    audioObj.volume = 0.2;

    if (reproduzindoCampFire == false) {
        audioObj.play();
        reproduzindoCampFire = true;
    }
    else{
        audioObj.pause();
        reproduzindoCampFire = false;
    }

}


