list = list1;
var number, ptr, l, t, w;
var free = true;
var okay = true;
node = document.getElementsByClassName("in")[0];
ptr = document.getElementById('pointer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startGame() {
    //alert("start");
    node.addEventListener("keyup", function (event) {
        var v = document.getElementById("in").value;
        if (event.key == "Enter" && free == true) {
            free = false;

            if (v == list[number][0]) {
                if (alert(list[number][0]))
                    setTimeout(() => { free = true; }, 5000);
                list.splice(number, 1);
            }
            else if (!alert("Not good!" + list[number][0]))
                setTimeout(() => { free = true; }, 5000);
            okay = true;
            free = true;
            if (list.length > 0) setRandomCountry();
        }
    });
}

function setRandomCountry() {
    number = Math.floor(Math.random() * list.length);
    //alert("set " + number + " " + list.length);
    l = list[number][1] + "px";
    t = list[number][2] + "px";
    w = list[number][3] + "px";
    ptr.style.left = l;
    ptr.style.top = t;
    ptr.style.width = w;
    //alert(l + " " + t + " " + w);
    if (list.length > 0) startGame();
}

//alert("ok");
okay = true;
setRandomCountry();
