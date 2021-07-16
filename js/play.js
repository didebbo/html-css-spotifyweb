var music = document.getElementById("music");

function play() {
    console.log("plaing");
    music.currentTime = 40;
    music.play();
}

function stop() {
    console.log("stop");
    music.pause();
    music.currentTime = 0;
}

function mute() {
    console.log("muted");
    music.volume = 0;
}

function unmute() {
    console.log("unmuted");
    music.volume = 1;
}