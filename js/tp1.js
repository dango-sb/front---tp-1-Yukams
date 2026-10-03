// TP1 Front
//////////////////////////////////////////////////////////////////////
// fonction principale,
// qui dépend d'autres fonctions définies plus loin dans ce fichier...

function runFunction() {
    "use strict";

    exo1(10000);

    exo2_1();
    exo2_2();
    exo2_3();
    exo2_4();

    exo3();

    exo4();
}

//////////////////////////////////////////////////////////////////////

// Exercice 1
function exo1(limit) {
        const result = [];
        for (let n = 2; n < limit; n++) {
            let sum = 0;
            for (let d = 1; d <= n / 2 ; d++) {
                if (n % d === 0) sum += d;
            }
            if (sum === n) result.push(n);
        }
        window.alert(result);
}

//////////////////////////////////////////////////////////////////////

// Exercice 2
function exo2_1() {
    "use strict";
    window.console.log("Exercice 2.1");
    window.console.log(Number("A"));   // NaN
    window.console.log(2 + (+"12") );        // 14
    window.console.log(2 * "12");            // 24
    window.console.log(1/0);                 // Infinity
    window.console.log(2 + "12");            // 212
    window.console.log((+"A"));              // NaN
    window.console.log(2 * "A");             // NaN
    window.console.log(1/-0);                // -Infinity
}

function exo2_2() {
    "use strict";
    window.console.log("Exercice 2.2");
    window.console.log(NaN === NaN);          // false
    window.console.log(NaN !== NaN);          // true
    window.console.log(isNaN(NaN));           // true


    // TODO regarder le résultat des opérations avec NaN
}

function exo2_3() {
    "use strict";
    window.console.log("Exercice 2.3");
    let x;
    window.console.log(x);          // undefined
    // TODO regarder la valeur d'une variable non initialisée
}

function exo2_4() {
    "use strict";
    window.console.log("Exercice 2.4");
    let x = 5;
    let y = null;
    let z;
    window.console.log("num === null : " + (x===y) + "\n" + "null===undefined : " + (y===z));
    // num === null : falsen
    // null===undefined : false

    // TODO regarder la différence entre null et undefined
}

//////////////////////////////////////////////////////////////////////

// Exercice 3

function escapeText(s){ "use strict"; var p = document.createElement('p'); p.textContent = s; return p.innerHTML; }

function appendText(text) {
    "use strict";
    document.getElementById("text").innerHTML += escapeText(text) + "<br>";
}

function exo3() {
    "use strict";

    document.getElementById("text").innerHTML = "";

    appendText("Exercice 3");
    var list = [1, 2, 4];
    appendText("camlListOfArray([1, 2, 4]) = " + camlListOfArray(list));

    var palindromes = ["", "a", "BB", "BOB", "ESOPERESTEICIETSEREPOSE"];
    var nonPalindromes = ["Bob", "BABA"];
    for (let i = 0; i < palindromes.length; i++) {
        appendText("estPalindrome(" + palindromes[i] + ") = " + estPalindrome(palindromes[i]));
    }
    for (let i = 0; i < nonPalindromes.length; i++) {
        appendText("estPalindrome(" + nonPalindromes[i] + ") = " + estPalindrome(nonPalindromes[i]));
    }

    var esop = "ESOPERESTEICIETSEREPOSE";
    appendText("listeOccurrences(\"E\", \"ESOPERESTEICIETSEREPOSE\") = " + listeOccurrences("E", "ESOPERESTEICIETSEREPOSE"));

    var testsEmail = ["a@b.fr", "john.doe@firm.co.uk", "somebody@domain"];
    testsEmail.forEach((element)=>appendText("estEmail(" + element +") = " + estEmail(element)));

    appendText("TODO : ajoutez le résulat de chaque opération");
}

function camlListOfArray(tableau) {
    "use strict";
    let resultat = "[";
    for (let i = 0; i < tableau.length; i++) {
        if (i > 0) {
            resultat += "; ";
        }
        resultat += tableau[i];
    }
    return resultat + "]";
}

function estPalindrome(texte) {
    "use strict";
    let lenTxt = texte.length - 1;
    for (let i = 0;i<lenTxt/2;i++) {
        if (texte.charAt(i) !== texte.charAt(lenTxt - i))
            return false;
    }
    return true;
}

function listeOccurrences(search, texte) {
    "use strict";
    const idxs = [];
    let position = texte.indexOf(search);
    while (position !== -1) {
        idxs.push(position);
        position = texte.indexOf(search, position + 1);
    }
    return idxs;
}

function estEmail(texte) {
    "use strict";
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
    return regex.test(texte);
}

//////////////////////////////////////////////////////////////////////

// Exercice 4
function exo4() {
    "use strict";
    appendText("Exercice 4");

    const robotTest = new Robot("I, robot");
    appendText(robotTest.nom);

    const r1 = new Robot("Buttler");
    const r2 = new Robot("Buttler");
    appendText("Robot: r1===r2 : " + (r1===r2));
    appendText("r1.equals(r2) : " + (r1.equals(r2)));

    const r3 = Robot2("ChatGPT");
    const r4 = Robot2("ChatGPT");
    appendText("Robot2: r3.equals(r4) : " + (r3.equals(r4)));

}

function Robot(nom) { // Constructeur Capitalisé
    "use strict";
    this.nom = nom;
    this.equals = function (robot) {return robot.nom === nom;};
}

function Robot2(nom) {
    "use strict";
    return {
        getNom: function () {
            return nom;
        },
        equals: function (robot) {
            return robot.getNom() === nom;
        }
    };
}


