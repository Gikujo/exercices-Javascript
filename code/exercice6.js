//  ------------- EXERCICE 6 ------------------

var afficher = `\n------------EXERCICE 6 ------------\n\n`;
console.log(afficher);

// Importation de la bibliothèque readline
const readline = require('readline');

// Création d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function poserQuestion() {
    rl.question("Quel nombre voulez-vous saisir ? ", function (reponse) {

        // On vérifie que l'entrée est un chiffre

        if (isNaN(reponse)) {
            console.log(`Veuillez taper un chiffre.\n`);
            poserQuestion();

        } else {

            console.log(`Le chiffre saisi est : ${reponse}.\n`);
            rl.close();
        }
    });
}

poserQuestion();