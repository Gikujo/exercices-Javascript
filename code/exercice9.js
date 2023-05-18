// ------------- EXERCICE 9 ---------------

var voiture = {
    immatriculation: "AB1234CD3",
    marque: "yoyota",
    annee: 2002
};



var afficher = `\n------------EXERCICE 9 ------------\n\n`;
afficher += `La voiture d'immatriculation ${voiture.immatriculation}, de marque ${voiture.marque}, date de ${voiture.annee}`;

// Consigne à l'utilisateur pour sortir de la commande
afficher += `\n\n-------Appuyez sur CTRL+C pour sortir de l'exercice.-------`;

console.log(afficher);
