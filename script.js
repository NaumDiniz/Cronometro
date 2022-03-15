var second = 00;
var minutes = 00;
var hours = 00;
var interval;

function start() {
    interval = setInterval(time, 10);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    second = 0;
    minutes = 0;
    tela.textContent = `00:00:00`;
}

function time() {
    var tela = document.getElementById("tela");
    second++;
    if (second == 60) {
        minutes++;
        second = 0;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    tela.textContent = `${hours} : ${minutes} : ${second}`;
}
