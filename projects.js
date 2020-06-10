var jollyToggle = false;
var littleToggle = false;
function playAudio(song) {
    var x = document.getElementById(song);
    if (song == "jolly") {
        if (jollyToggle) {
            x.pause();
            jollyToggle = false;
        } else {
            x.play();
            jollyToggle = true;
        }
    }
    if (song == "little") {
        if (littleToggle) {
            x.pause();
            littleToggle = false;
        } else {
            x.play();
            littleToggle = true;
        }
    }
}