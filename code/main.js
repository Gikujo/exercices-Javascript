// Importation de la bibliothèque readline
const readline = require('readline');

// Création d'une interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction pour poser la question
function poserQuestion() {
    rl.question("Tapez un numéro d'exercice : ", function (reponse) {
        if (reponse.trim() === "") {
            // Si l'utilisateur n'a pas répondu, rappel de la fonction
            poserQuestion();
        } else if (reponse.trim() === "1") {
            // Traitement de la réponse ici
            require('./exercice1.js');
        } else if (reponse.trim() === "2") {
            // Traitement de la réponse ici
            require('./exercice2.js');
        } else if (reponse.trim() === "3") {
            // Traitement de la réponse ici
            require('./exercice3.js');
        } else if (reponse.trim() === "4") {
            // Traitement de la réponse ici
            require('./exercice4.js');
        } else if (reponse.trim() === "5") {
            // Traitement de la réponse ici
            require('./exercice5.js');
        } else if (reponse.trim() === "6") {
            // Traitement de la réponse ici
            require('./exercice6.js');
        } else if (reponse.trim() === "7") {
            // Traitement de la réponse ici
            require('./exercice7.js');
        } else if (reponse.trim() === "8") {
            // Traitement de la réponse ici
            require('./exercice8.js');
        } else if (reponse.trim() === "9") {
            // Traitement de la réponse ici
            require('./exercice9.js');
        } else if (reponse.trim() === "10") {
            // Traitement de la réponse ici
            require('./exercice10.js');
        } else {
            console.log("Exercice non reconnu. Veuillez entrer un numéro valide entre 1 et 10.");
            poserQuestion();
        }
    });
}

// Appel de la fonction pour poser la question
poserQuestion();
