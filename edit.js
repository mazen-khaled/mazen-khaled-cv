function opens() {
    document.getElementById("cl").style.left = '0%';
    document.getElementById("bm").style.display = "block";
}
function closes() {
    document.getElementById("cl").style.left = "-54%";
    document.getElementById("bm").style.display = "none";
}


var x = window.matchMedia('(max-width: 1200px ) and (min-width: 700px )');

    function myFunction3() {
        if (x.matches) document.getElementById("g").style.display = "inline";
    }
    function myFunction4() {
        if (x.matches) document.getElementById("w").style.display = "inline";
    }
    function myFunction5() {
        if (x.matches) document.getElementById("g").style.display = "none";
    }
    function myFunction6() {
        if (x.matches) document.getElementById("w").style.display = "none";
    }


