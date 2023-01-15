function startGame() {
    const list = list1;
    var number;
    //while (list.length != 0) {
        number = Math.floor(Math.random() * list.length);
        alert(list[number][0]);
        const ptr = document.getElementById('pointer');
        var l = list[number][1]+"px";
        var t = list[number][2]+"px";
        var w = list[number][3]+"px";
        document.getElementById("pointer").style.left=l;
        document.getElementById("pointer").style.top=t;
        document.getElementById("pointer").style.width=w;

        /*const log = document.getElementById('log');
        const input = document.querySelector('input');
        input.addEventListener('keypress', logKey);

        function logKey(e) {
            alert("!!!!");
        }*/
    //}
}

startGame();