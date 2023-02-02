list = list1;
var number, ptr, l, t, w, text, text2, node, d, time, time2, correct;
node = document.getElementsByClassName("in")[0];
ptr = document.getElementById('pointer');
d = new Date();
time = d.getTime();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function appearCongrats() {
    if (time2 >= 60)
        time2 = Math.round((time2-time2%60)/60) + " minutes " + time2%60;
    message = "You comlished the test in " + time2 + " seconds!"
    alert(message);
    setTimeout(function() { location.href='menu.html' }, 1000);
}

function gameOver() {
    ptr.style.visibility = "hidden";
    setTimeout(function() { text.style.visibility = "hidden"; text2.style.visibility = "hidden"}, 1000);
    d = new Date();
    time2 = Math.round((d.getTime() - time) / 1000);
    setTimeout(function() { appearCongrats()}, 1000);
}

function appearText(move) {
    text.style.visibility = "visible";
    if (correct) text2.style.visibility = "hidden";
    else text2.style.visibility = "visible";
    let s = 20;
    let l2 = 850;
    var t = 450;
    for (let i = 0; i < 20; i++) {
        setTimeout(function() {
            s += 5;
            t += 5;
            text.style.fontSize = s + "px";
            text2.style.fontSize = s/2 + "px";
            l2 -= move;
            text.style.left = l2 + "px";
            text2.style.left = l2 + "px";
            text2.style.top = t + "px";
        }, 20*i);
    }
    setTimeout(function() { hideText(move); }, 1000);    
}

function hideText(move) {
    var s = 120
    var l2 = 850 - 20*move;
    var t = 550;
    for (let i = 0; i < 20; i++) {
        setTimeout(function() {
            s -= 5;
            t -= 5;
            text.style.fontSize = s + "px";
            text2.style.fontSize = s/2 + "px";
            l2 += move;
            text.style.left = l2 + "px";
            text2.style.left = l2 + "px";
            text2.style.top = t + "px";
        }, 10*i);
    }
    setTimeout(function() { text.style.visibility = "hidden"; text2.style.visibility = "hidden"; }, 200);
    if (list.length > 0) setRandomCountry();
    else gameOver();
}


node.addEventListener("keyup", function (event) {
    text = document.getElementById('txt');
    text2 = document.getElementById('txt2');
    sleep(2000);
    var v = document.getElementById("in").value;
    if (event.key == "Enter") {
        if (v == list[number][0]) {
            correct = true;
            text.innerHTML = "GOOD";
            text.style.width = "20px";
            appearText(5);
            list.splice(number, 1);
        }
        else {
            correct = false;
            text.style.width = "1px";
            text.innerHTML = "NOT GOOD";
            var message = "The correct answer is " + list[number][0];
            text2.innerHTML = message;
            appearText(15);
        }
        node.value = "";
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