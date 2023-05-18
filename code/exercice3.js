//  ------------- EXERCICE 3 ------------------

var afficher = `\n------------EXERCICE 3 ------------\n\n`;
console.log(afficher);


// Importation de la bibliothèque readline
const readline = require('readline');

// Création d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Fonction pour poser la question
rl.question("Puissance voulue ? ", function (reponse) {

    const puissance = reponse;

    // Initialisation du chiffre à afficher en tant que réponse
    let chiffre = 1;

    // calcul de la puissance
    for (var i = 0; i < puissance; i++) {
        chiffre *= 2;
    }

    // affichage de la réponse
    console.log(`2 à la puissance ${puissance} = ${chiffre} \n`);
    rl.close();
});