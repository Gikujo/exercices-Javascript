//  ------------- EXERCICE 10 ------------------

var afficher = `\n------------EXERCICE 10 ------------\n\n`;
console.log(afficher);

// Importation de la bibliothèque readline
const readline = require('readline');

// Création d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var personnage = {};

/* Les questions doivent être imbriquées les unes
 dans les autres pour qu'elles soient toutes posées. */

rl.question("Quel est le nom ? ", function (entreeNom) {

    function poserQuestion() {
        rl.question("Quel âge ? ", function (entreeAge) {

            // On vérifie que l'entrée est un chiffre

            if (isNaN(entreeAge)) {
                console.log(`Veuillez taper un chiffre.\n`);
                poserQuestion();

            } else {

                var nomToto = entreeNom;
                var ageToto = entreeAge;

                personnage = {
                    nom: nomToto,
                    age: ageToto
                };

                console.log(personnage);
                rl.close();
            }
        });
    }

    poserQuestion();
});
