//  ------------- EXERCICE 7 ------------------

var afficher = `\n------------EXERCICE 7 ------------\n\n`;
afficher += `Cet exercice permet de vérifier si un chiffre est divisible par 3.\n`
console.log(afficher);


// Importation de la bibliothèque readline
const readline = require('readline');

// Création d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Fonction pour poser la question
function poserQuestion() {
    rl.question("Veuillez taper un chiffre : ", function (reponse) {

        const chiffre = reponse;

        if (chiffre % 3 === 0) {

            var quotient = chiffre / 3;
            console.log(`Votre chiffre est divisible par 3.\n${chiffre} / 3 = ${quotient}\n`);
            rl.close();

        } else if (isNaN(chiffre)) {

            console.log(`Vous devez taper un chiffre. Recommencez.\n`);
            poserQuestion();

        } else if (chiffre % 3 != 0) {

            console.log(`Le chiffre ${chiffre} n'est pas divisible par 3.`);
            rl.close();

        }
    });
}

poserQuestion();