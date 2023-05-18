//  ------------- EXERCICE 4 ------------------

var afficher = `\n------------EXERCICE 4 ------------\n\n`;
console.log(afficher);

// Importation de la bibliothèque readline
const readline = require('readline');

// Création d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* Les questions doivent être imbriquées les unes
 dans les autres pour qu'elles soient toutes posées. */

rl.question("Quel est votre nom ? ", function (nom) {

    rl.question("Quel est votre prénom ? ", function (prenom) {

        //La question 3 est une fonction pour qu'on puisse l'appeler
        // à l'intérieur d'elle-même

        function question3() {
            rl.question("Quel est votre âge ? ", function (age) {

                // On vérifie que l'entrée est un chiffre

                if (isNaN(age)) {
                    console.log(`Veuillez taper un chiffre.\n`);
                    question3();

                } else {

                    var afficher = `-------------------------------\n`;
                    afficher += `-----------BIENVENUE-----------\n`;
                    afficher += `-------------------------------\n`;
                    afficher += `Votre nom est : ${nom}\n`;
                    afficher += `Votre prénom est : ${prenom}\n`;
                    afficher += `Vous êtes agé de ${age} années\n`;

                    console.log(`${afficher}\n`);
                    rl.close();
                }
            });
        }

        question3();
    });
});
