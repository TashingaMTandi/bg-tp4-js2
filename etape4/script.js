"use strict";

// Slide 51 : Mode strict.

// --- 1. Les données (Slide 40) ---
const persons = [
    { nom: 'nom-1', prenom: 'prenom-1', points: 5 },
    { nom: 'nom-2', prenom: 'prenom-2', points: 10 },
    { nom: 'nom-3', prenom: 'prenom-3', points: 15 }
];

// --- 2. Compteurs globaux (Slide 50) ---
let lignes = 0;
// NOUVEAU : Variable globale pour suivre la somme de tous les points.
let total_points = 0;



 // Slide 14 & 104 : Crée une nouvelle ligne (<tr>) et l'ajoute au tableau.
 
function doInsertRowTable(num, nom, prenom, points) {
    const tableBody = document.querySelector("#table_container table tbody");
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");

    cell1.textContent = num;
    cell2.textContent = nom;
    cell3.textContent = prenom;
    cell4.textContent = points;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    cell5.appendChild(checkbox);

    cell1.setAttribute("class", "col_number");
    cell2.setAttribute("class", "col_text");
    cell3.setAttribute("class", "col_text");
    cell4.setAttribute("class", "col_number");
    cell5.setAttribute("class", "col_chkbox");

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    tableBody.appendChild(row);
}



 // Slide 45 : Insère une personne avec un numéro auto-incrémenté,
 // met à jour le total des points, et rafraîchit le résumé.
 
function doInsert(nom, prenom, points) {
    lignes = lignes + 1;

    // NOUVEAU : Ajoute les points de la nouvelle personne au total global.
    // parseInt() garantit qu'on additionne des nombres, pas des chaînes.
    total_points = total_points + parseInt(points);

    doInsertRowTable(lignes, nom, prenom, points);

    // NOUVEAU : Met à jour l'espace résumé après chaque insertion.
    update_summary();
}



 // Slide 44 : Fonction d'initialisation.
 
function init() {
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}



 // Slide 44 & 30 : Affiche le tableau "persons" dans la console.
 
function consoleTableau() {
    console.log(persons);
}



 // NOUVEAU - Slide 61 & 90 : Met à jour les éléments DOM du résumé.
 // Utilise getElementById pour trouver les balises <p> et innerText pour changer leur contenu.
 
function update_summary() {
    // Slide 61 : Récupérer l'élément avec l'id "p1".
    const element_lignes = document.getElementById("p1");

    // Slide 61 : Récupérer l'élément avec l'id "p3".
    const element_points = document.getElementById("p3");

    // Slide 90 : Modifier le contenu avec innerText.
    // On utilise les template literals (backticks) pour une construction de chaîne plus propre.
    element_lignes.innerText = `${lignes} ligne(s)`;
    element_points.innerText = `Total point(s)= ${total_points}`;
}


// --- 3. Démarrer l'application ---
init();