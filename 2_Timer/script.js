// Todo Code
function domEdit(id, inner) {
    let dom = document.getElementById(id);
    dom.innerHTML = inner;
}

var hr = 0;
var min = 0;
var sec = 0;

function start() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    } else if (min >= 60) {
        min = 0;
        hr++;
    } else if (hr >= 24) {
        hr = 0;
    }
    domEdit('seconds', sec);
    domEdit('minutes', min);
    domEdit('hours', hr);
}
function run() {
    test = setInterval(start, 1000);
}