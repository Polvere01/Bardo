
var reproduzindoRain = false;
var reproduzindoCampFire = false;
var reproduzindoWind = false;
var reproduzindoTrain = false;
var reproduzindoThunder = false;

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

    if (reproduzindoWind == false) {
        audioObj.play();
        reproduzindoWind = true;
    }
    else{
        audioObj.pause();
        reproduzindoWind = false;
    }

}

function playAudioTrain() {
    audioObj = document.getElementById("audio-train")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoTrain == false) {
        audioObj.play();
        reproduzindoTrain = true;
    }
    else{
        audioObj.pause();
        reproduzindoTrain = false;
    }

}


function playAudioThunder() {
    audioObj = document.getElementById("audio-thunder")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoThunder == false) {
        audioObj.play();
        reproduzindoThunder = true;
    }
    else{
        audioObj.pause();
        reproduzindoThunder = false;
    }

}

function moveCard(item){
    var cardImg = item.getElementsByTagName("img");

    if (cardImg[0].classList.contains("sound-item-click")){
        cardImg[0].classList.remove("sound-item-click");
    }
    else{
        cardImg[0].classList.add("sound-item-click");
    }
}


