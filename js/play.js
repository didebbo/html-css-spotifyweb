var dom_music = document.getElementById("music");
strat_to = 49;
dom_music.currentTime = strat_to;

var dom_current_time = document.getElementById("current_time");

var dom_duration_time = document.getElementById("duration_time");

function play() {
    dom_music.play();
}

function stop() {
    dom_music.pause();
    dom_music.currentTime = strat_to;
}

function mute() {
    dom_music.volume = 0;
}

function unmute() {
    dom_music.volume = 1;
}

setInterval(() => {
    var curr_minutes = String(Math.floor(dom_music.currentTime / 60));
    var curr_seconds = String((Math.floor(dom_music.currentTime) - curr_minutes * 60));
    if (curr_seconds.length < 2) curr_seconds = "0" + curr_seconds;
    dom_current_time.innerHTML = curr_minutes + ":" + curr_seconds;
    console.log(dom_current_time.innerHTML);

    var duration_minutes = String(Math.floor(dom_music.duration / 60));
    var duration_seconds = String((Math.floor(dom_music.duration) - duration_minutes * 60));
    if (duration_seconds.length < 2) duration_seconds = "0" + duration_seconds;
    dom_duration_time.innerHTML = duration_minutes + ":" + duration_seconds;
}, 100);

