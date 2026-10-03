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
    // TODO camlListOfArray

    var palindromes = ["", "a", "BB", "BOB", "ESOPERESTEICIETSEREPOSE"];
    var nonPalindromes = ["Bob", "BABA"];
    // TODO estPalindrome

    var esop = "ESOPERESTEICIETSEREPOSE"
    // TODO listeOccurrences

    var testsEmail = ["a@b.fr", "john.doe@firm.co.uk", "somebody@domain"];
    // TODO estEmail

    appendText("TODO : ajoutez le résulat de chaque opération");
}

function camlListOfArray(tableau) {
    "use strict";
    // TODO
    return "TODO";
}

function estPalindrome(texte) {
    "use strict";
    // TODO
    return true;
}

function listeOccurrences(search, texte) {
    "use strict";
    // TODO
    return [];
}

function estEmail(texte) {
    "use strict";
    // TODO
    return true;
}

//////////////////////////////////////////////////////////////////////

// Exercice 4
function exo4() {
    "use strict";
    appendText("Exercice 4");
    // TODO
    appendText("TODO : ajoutez le résulat de chaque opération")
}


