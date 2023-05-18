//  ------------- EXERCICE 2 ------------------

var nom = "toto";
var age = 30;
var homme = true;

var afficher = `\n------------EXERCICE 2 ------------\n\n`;
afficher += `Nom : ${nom}\n`;
afficher += `Age : ${age} \n`;

if (homme === true) {

    afficher += `Genre : homme`;
}

// Consigne à l'utilisateur pour sortir de la commande
afficher += `\n\n-------Appuyez sur CTRL+C pour sortir de l'exercice.-------`;

console.log(afficher);