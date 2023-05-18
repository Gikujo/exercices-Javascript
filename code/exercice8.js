//  ------------- EXERCICE 6 ------------------

var afficher = `\n------------EXERCICE 8 ------------\n\n`;
afficher += `Cet exercice permet de vérifier si un mot contient moins de 8 caractères.\n`
console.log(afficher);

// Importation de la bibliothèque readline
const readline = require('readline');

// Création d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function poserQuestion() {
    rl.question("Quel mot voulez-vous saisir ? ", function (reponse) {

        var longueurMot = reponse.length;

        if (longueurMot < 8) {
            console.log(`Le mot "${reponse}" contient ${longueurMot} caractères.\n`);
            rl.close();

        } else {

            console.log(`Le mot "${reponse}" contient plus de 8 caractères.\n`);
            rl.close();

        }
    });
}

poserQuestion();