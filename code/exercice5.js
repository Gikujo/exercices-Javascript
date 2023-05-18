//  ------------- EXERCICE 5 ------------------

var afficher = `\n------------EXERCICE 5 ------------\n\n`;
console.log(afficher);


// Importation de la bibliothèque readline
const readline = require('readline');

// Création d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Fonction pour poser la question
rl.question("Quelle table de multiplication voulez-vous afficher ? ", function (reponse) {

    const chiffre = reponse;
    let produit = 1;

    for (i = 1; i <= 10; i++) {
        produit = chiffre * i;
        console.log(`${chiffre} * ${i} = ${produit}`);
    }

    // On saute une ligne (ça fait plus propre), puis on affiche la ligne de commande
    console.log(`\n`);
    rl.close();
});