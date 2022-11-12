function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function race() {
    document.getElementById("kraj").innerHTML = ""; // za na kraj da ne stoi click for a rematch
    var zajak = 1;
    var zelka = 1;

    var i = Math.floor(Math.random() * 10) + 1; // floor za cel broj, +1 za da e od 1 do 10
    var string1 = "<p>";
    var string2 = "<p>";
    while (zelka < 70 && zajak < 70) {
        await sleep(1000);

        var x = zajak;
        var y = zelka;
        if (i <= 2) {
            zelka += 3;
            zajak = zajak;
        }
        if (i > 2 && i <= 4) {
            zelka += 3;
            zajak += 9;
        }
        if (i == 5) {
            zelka += 3;
            zajak -= 12;
        }
        if (i > 5 && i <= 7) {
            zelka -= 6;
            zajak += 1;
        }
        if (i == 8) {
            zelka += 1;
            zajak += 1;
        }
        if (i > 8 && i <= 10) {
            zelka += 1;
            zajak -= 2;
        }

        if (zajak < 1) { zajak = 1; }
        if (zelka < 1) { zelka = 1; }

        if (zajak >= 70) { zajak = 70; } // za da ne izleze od ekranot koa ke zavrsi tuku da stoi na poslednoto
        if (zelka >= 70) { zelka = 70; }

        for (var k = 1; k <= 70; k++) {
            if (k == zajak) {
                string1 += "<img src=\"rabbit.png\" class=\"slikicka\">";
            } else {
                if (k % 2 == 0) {
                    string1 += "<i class= \" glyphicon glyphicon-tree-deciduous drvo1 \"></i>" + "  ";
                }
                else {
                    string1 += "<i class= \" glyphicon glyphicon-tree-conifer drvo2\"></i>" + "  ";
                }
            }

        }
        for (var k = 1; k <= 70; k++) {
            if (k == zelka) {
                string2 += "<img src=\"turtle.png\" class=\"slikicka\">";
            } else {
                if (k % 2 != 0) {
                    string2 += "<i class= \" glyphicon glyphicon-tree-deciduous drvo1\"></i>" + "  ";
                }
                else {
                    string2 += "<i class= \" glyphicon glyphicon-tree-conifer drvo2\"></i>" + "  ";
                }
            }
        }
        string1 += "</p>";
        string2 += "</p>";
        document.getElementById("zajak").innerHTML = string1;
        document.getElementById("zelka").innerHTML = string2;

        if (zajak == zelka && zajak != 1) {
            setTimeout(function(){ window.alert("ouch"); buttons: false; }, 100); // za da se pomesti prvo slikata pa posle da se pojavi ova
        }
        i = Math.floor(Math.random() * 10) + 1;
        string1 = "<p>";
        string2 = "<p>";

    }

    document.getElementById("kraj").innerHTML = "<h3>Click the button again for a rematch<h3>";
    if (zajak == 70) { setTimeout(function(){ window.alert("Pobedi zajakot"); }, 100);}
    if (zelka == 70) { setTimeout(function(){ window.alert("Pobedi zhelkata"); }, 100);}
}

var startbutton = document.getElementById("start");
startbutton.addEventListener("click", race, false);