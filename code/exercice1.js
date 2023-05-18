// ------------- EXERCICE 1 ---------------

var a = 1;
var b = 5;

var afficher = `\n------------EXERCICE 1 ------------\n\n`;
afficher += `---------Avant Inversion------------\n`;
afficher += `A : ${a}\n`;
afficher += `B : ${b}\n`;

afficher += `---------Après Inversion------------\n`;
afficher += `A : ${b}\n`;
afficher += `B : ${a}\n`;

// Consigne à l'utilisateur pour sortir de la commande
afficher += `\n\n-------Appuyez sur CTRL+C pour sortir de l'exercice.-------`;

console.log(afficher);
