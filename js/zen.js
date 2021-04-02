
var reproduzindoRain = false;
var reproduzindoCampFire = false;
var reproduzindoCampWind = false;
var reproduzindoCampTrain = false;

function playAudioRain() {
    audioObj = document.getElementById("audio-rain")
    audioObj.loop = true;
    audioObj.volume = 1;

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
    audioObj.volume = 1;

    if (reproduzindoCampFire == false) {
        audioObj.play();
        reproduzindoCampFire = true;
    }
    else{
        audioObj.pause();
        reproduzindoCampFire = false;
    }

}


function playAudioWind() {
    audioObj = document.getElementById("audio-wind")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoCampWind == false) {
        audioObj.play();
        reproduzindoCampWind = true;
    }
    else{
        audioObj.pause();
        reproduzindoCampWind = false;
    }

}

function playAudioTrain() {
    audioObj = document.getElementById("audio-train")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoCampTrain == false) {
        audioObj.play();
        reproduzindoCampTrain = true;
    }
    else{
        audioObj.pause();
        reproduzindoCampTrain = false;
    }

}


