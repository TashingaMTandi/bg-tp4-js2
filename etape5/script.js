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
    total_points = total_points + parseInt(points);
    doInsertRowTable(lignes, nom, prenom, points);
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


 // Slide 61 & 90 : Met à jour les éléments DOM du résumé.
 
function update_summary() {
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");
    element_lignes.innerText = `${lignes} ligne(s)`;
    element_points.innerText = `Total point(s)= ${total_points}`;
}


 // Slide 53 & 55 : Lit les valeurs des champs de saisie,
 // valide, insère les données, met à jour le tableau persons,
 // et vide les champs.
 
function doNewData() {
    // Slide 61 : Récupérer les éléments de saisie par leur ID.
    const elit_nom = document.getElementById("form_nom");
    const elit_prenom = document.getElementById("form_prenom");
    const elit_points = document.getElementById("form_points");

    // Slide 61 : Accéder à l'attribut .value pour récupérer le texte saisi.
    const nom = elit_nom.value;
    const prenom = elit_prenom.value;
    // Slide 53 : parseInt() pour convertir le texte en entier.
    const points = parseInt(elit_points.value);

    // Slide 55 : Validation - Vérifier qu'aucun champ n'est vide.
    // Number.isNaN(points) retourne true si points n'est pas un nombre (ex: champ vide).
    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        // Message d'alerte si le formulaire est incomplet.
        alert("Formulaire incomplet !");
    } else {
        // Traitement normal d'ajout.
        
        // 1. Appeler doInsert pour ajouter la ligne visuellement.
        doInsert(nom, prenom, points);
        
        // 2. Slide 40 : Ajouter aussi les nouvelles données au tableau "persons".
        // On utilise .push() pour ajouter un nouvel objet à la fin du tableau.
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });
        
        // 3. Slide 61 : Vider les champs pour préparer une autre saisie.
        elit_nom.value = "";
        elit_prenom.value = "";
        elit_points.value = "";
    }
}


// --- 3. Démarrer l'application ---
init();