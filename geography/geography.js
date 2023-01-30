function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function gameOver() {
    ptr.style.visibility = "hidden";
    setTimeout(function() { text.style.visibility = "hidden"; }, 1000);
}

function appearText(move) {
    text.style.visibility = "visible";
    let s = 20;
    let l2 = 850;
    for (let i = 0; i < 20; i++) {
        setTimeout(function() {
            s += 5;
            text.style.fontSize = s + "px";
            l2 -= move;
            text.style.left = l2 + "px";
        }, 20*i);
    }
    setTimeout(function() { hideText(move); }, 1000);    
}

function hideText(move) {
    var s = 120
    var l2 = 550;
    for (let i = 0; i < 20; i++) {
        setTimeout(function() {
            s -= 5;
            text.style.fontSize = s + "px";
            l2 += move;
            text.style.left = l2 + "px";
        }, 10*i);
    }
    setTimeout(function() { text.style.visibility = "hidden"; }, 200);
    if (list.length > 0) setRandomCountry();
    else gameOver();
}

list = list1;
var number, ptr, l, t, w, text, node;
node = document.getElementsByClassName("in")[0];
ptr = document.getElementById('pointer');

node.addEventListener("keyup", function (event) {
    text = document.getElementById('txt');
    sleep(2000);
    var v = document.getElementById("in").value;
    if (event.key == "Enter") {
        if (v == list[number][0]) {
            text.innerHTML = "GOOD";
            text.style.width = "20px";
            appearText(5);
            list.splice(number, 1);
        }
        else {
            text.style.width = "1px";
            text.innerHTML = "NOT GOOD";
            appearText(15);
        }
    }
});


function setRandomCountry() {
    number = Math.floor(Math.random() * list.length);
    l = list[number][1] + "px";
    t = list[number][2] + "px";
    w = list[number][3] + "px";
    ptr.style.left = l;
    ptr.style.top = t;
    ptr.style.width = w;
}

setRandomCountry();