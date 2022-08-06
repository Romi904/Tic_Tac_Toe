let z = "X";
let p = 9;
let audioTurn = new Audio("ting.mp3");
let winner = new Audio("applause.mp3");
// let C = prompt("1. Play With Opponent.\n2. Play With Machine.");

function change() {
    if (z == 'X') {
        z = 'O';
    }
    else {
        z = 'X';
    }
}
function namee() {
    if (z == 'X') {
        document.getElementById('h2').innerText = "Your turn 'X'";
    }
    else {
        document.getElementById('h2').innerText = "Opponent turn 'O'";
    }
}
function clic(m) {
    audioTurn.play();
    document.getElementById(m).innerHTML = z;
    p--;
    change();
    checkwin();
    namee();
    draw();
}
function began() {
    document.getElementById('banner').style.visibility = "hidden";
    namee();
    openFullscreen();
}
function checkwin() {
    var a1, a2, a3, b1, b2, b3, c1, c2, c3;
    a1 = document.getElementById("1").innerText;
    a2 = document.getElementById("2").innerText;
    a3 = document.getElementById("3").innerText;
    b1 = document.getElementById("4").innerText;
    b2 = document.getElementById("5").innerText;
    b3 = document.getElementById("6").innerText;
    c1 = document.getElementById("7").innerText;
    c2 = document.getElementById("8").innerText;
    c3 = document.getElementById("9").innerText;

    if ((a1 == 'O' && a2 == 'O' && a3 == 'O') || (b1 == 'O' && b2 == 'O' && b3 == 'O') || (c1 == 'O' && c2 == 'O' && c3 == 'O') || (a1 == 'O' && b1 == 'O' && c1 == 'O') || (b2 == 'O' && a2 == 'O' && c2 == 'O') || (a3 == 'O' && b3 == 'O' && c3 == 'O') || (a1 == 'O' && b2 == 'O' && c3 == 'O') || (a3 == 'O' && b2 == 'O' && c1 == 'O')) {
        winner.play();
        document.getElementById('win_banner').style.visibility = "visible";
        // window.confirm("  X WINNER .");
        setTimeout(miu, 4000);
    }
    if ((a1 == 'X' && a2 == 'X' && a3 == 'X') || (b1 == 'X' && b2 == 'X' && b3 == 'X') || (c1 == 'X' && c2 == 'X' && c3 == 'X') || (a1 == 'X' && b1 == 'X' && c1 == 'X') || (b2 == 'X' && a2 == 'X' && c2 == 'X') || (a3 == 'X' && b3 == 'X' && c3 == 'X') || (a1 == 'X' && b2 == 'X' && c3 == 'X') || (a3 == 'X' && b2 == 'X' && c1 == 'X')) {
        winner.play();
        document.getElementById('win_banner').style.visibility = "visible";
        setTimeout(miu, 4000);
    }
}
function draw() {
    if (p < 1) {
        document.getElementById('banner').style.visibility = "visible";
        document.getElementById('banner').innerText = "-----DRAW-----";
        setTimeout(miu, 2000);
    }
}
function miu() {
    window.location.reload();
}
function openFullscreen() {
    var elem = document.getElementById('body');
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    
}