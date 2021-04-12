
var reproduzindoRain = false;
var reproduzindoCampFire = false;
var reproduzindoWind = false;
var reproduzindoBell = false;
var reproduzindoDesk = false
var reproduzindoThunder = false;
var reproduzindoTrain = false;
var reproduzindoNight = false;
var reproduzindoForest = false;
var reproduzindoOcean = false;

function playAudioRain() {
    audioObj = document.getElementById("audio-rain")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoRain == false) {
        audioObj.play();
        reproduzindoRain = true;
    }
    else {
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
    else {
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
    else {
        audioObj.pause();
        reproduzindoWind = false;
    }

}

function playAudioBell() {
    audioObj = document.getElementById("audio-bell")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoBell == false) {
        audioObj.play();
        reproduzindoBell = true;
    }
    else {
        audioObj.pause();
        reproduzindoBell = false;
    }

}

function playAudioDesk() {
    audioObj = document.getElementById("audio-desk")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoDesk == false) {
        audioObj.play();
        reproduzindoDesk = true;
    }
    else {
        audioObj.pause();
        reproduzindoDesk = false;
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
    else {
        audioObj.pause();
        reproduzindoTrain = false;
    }

}


function playAudioNight() {
    audioObj = document.getElementById("audio-night")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoNight == false) {
        audioObj.play();
        reproduzindoNight = true;
    }
    else {
        audioObj.pause();
        reproduzindoNight = false;
    }

}

function playAudioForest() {
    audioObj = document.getElementById("audio-forest")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoForest == false) {
        audioObj.play();
        reproduzindoForest = true;
    }
    else {
        audioObj.pause();
        reproduzindoForest = false;
    }

}


function playAudioOcean() {
    audioObj = document.getElementById("audio-ocean")
    audioObj.loop = true;
    audioObj.volume = 1;

    if (reproduzindoOcean == false) {
        audioObj.play();
        reproduzindoOcean = true;
    }
    else {
        audioObj.pause();
        reproduzindoOcean = false;
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
    else {
        audioObj.pause();
        reproduzindoThunder = false;
    }

}

function moveCardRain(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-rain")) {
        cardImg[0].classList.remove("sound-item-click-rain");
    }
    else {
        cardImg[0].classList.add("sound-item-click-rain");
    }
}



function moveCardFire(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-fire")) {
        cardImg[0].classList.remove("sound-item-click-fire");
    }
    else {
        cardImg[0].classList.add("sound-item-click-fire");
    }
}


function moveCardBell(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-bell")) {
        cardImg[0].classList.remove("sound-item-click-bell");
    }
    else {
        cardImg[0].classList.add("sound-item-click-bell");
    }
}

function moveCardDesk(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-desk")) {
        cardImg[0].classList.remove("sound-item-click-desk");
    }
    else {
        cardImg[0].classList.add("sound-item-click-desk");
    }
}

function moveCardThunder(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-thunder")) {
        cardImg[0].classList.remove("sound-item-click-thunder");
    }
    else {
        cardImg[0].classList.add("sound-item-click-thunder");
    }
}


function moveCardWind(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-wind")) {
        cardImg[0].classList.remove("sound-item-click-wind");
    }
    else {
        cardImg[0].classList.add("sound-item-click-wind");
    }
}

function moveCardTrain(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-train")) {
        cardImg[0].classList.remove("sound-item-click-train");
    }
    else {
        cardImg[0].classList.add("sound-item-click-train");
    }
}

function moveCardNight(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-night")) {
        cardImg[0].classList.remove("sound-item-click-night");
    }
    else {
        cardImg[0].classList.add("sound-item-click-night");
    }
}

function moveCardForest(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-forest")) {
        cardImg[0].classList.remove("sound-item-click-forest");
    }
    else {
        cardImg[0].classList.add("sound-item-click-forest");
    }
}

function moveCardOcean(item) {
    var cardImg = item.getElementsByTagName("svg");

    if (cardImg[0].classList.contains("sound-item-click-ocean")) {
        cardImg[0].classList.remove("sound-item-click-ocean");
    }
    else {
        cardImg[0].classList.add("sound-item-click-ocean");
    }
}
