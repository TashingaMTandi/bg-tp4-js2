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



//Slide 14 & 104 : Crée une nouvelle ligne (<tr>) et l'ajoute au tableau.

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



//Slide 45 : Insère une personne avec un numéro auto-incrémenté,
// met à jour le total des points, et rafraîchit le résumé.

function doInsert(nom, prenom, points) {
    lignes = lignes + 1;
    total_points = total_points + parseInt(points);
    doInsertRowTable(lignes, nom, prenom, points);
    update_summary();
}


//Slide 44 : Fonction d'initialisation.

function init() {
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

 // Slide 44 & 30 : Affiche le tableau "persons" dans la console.
function consoleTableau() {
    console.log(persons);
}


/////
 // Slide 61 & 90 : Met à jour les éléments DOM du résumé.
 ///
function update_summary() {
    const element_lignes = document.getElementById("p1");
    const element_points = document.getElementById("p3");
    element_lignes.innerText = `${lignes} ligne(s)`;
    element_points.innerText = `Total point(s)= ${total_points}`;
}

 // Slide 53 & 55 : Lit les valeurs des champs de saisie,
 // valide, insère les données, met à jour le tableau persons,
 // et vide les champs.
 ///
function doNewData() {
    const elit_nom = document.getElementById("form_nom");
    const elit_prenom = document.getElementById("form_prenom");
    const elit_points = document.getElementById("form_points");

    const nom = elit_nom.value;
    const prenom = elit_prenom.value;
    const points = parseInt(elit_points.value);

    if (nom === "" || prenom === "" || Number.isNaN(points)) {
        alert("Formulaire incomplet !");
    } else {
        doInsert(nom, prenom, points);
        persons.push({
            nom: nom,
            prenom: prenom,
            points: points
        });
        elit_nom.value = "";
        elit_prenom.value = "";
        elit_points.value = "";
    }
}

 // Slide 61, 76, 99, 101 : Supprime les lignes cochées du DOM et des données.
 
function deleteRow() {
    // Étape 1 : Vérifier si le tableau est vide.
    if (lignes === 0) {
        alert("Le tableau est déjà vide !");
        return; // Sortir de la fonction.
    }

    // Étape 2 : Récupérer toutes les checkboxes cochées.
    // Slide 76 : querySelectorAll retourne une collection (NodeList).
    // On cible les inputs de type checkbox dans les cellules .col_chkbox.
    const checkboxes = document.querySelectorAll(".col_chkbox input[type='checkbox']");

    // Étape 3 : Vérifier si au moins une checkbox est cochée.
    // On filtre pour ne garder que celles qui sont cochées.
    const checkedBoxes = [];
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            checkedBoxes.push(checkbox);
        }
    }

    if (checkedBoxes.length === 0) {
        alert("Sélectionnez au moins une ligne !");
        return;
    }

    // Étape 4 : Demander confirmation à l'utilisateur.
    // Slide 116 : window.confirm affiche une boîte de dialogue Oui/Non.
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer les lignes sélectionnées ?");
    if (!confirmation) {
        return; // L'utilisateur a annulé.
    }

    // Étape 5 & 6 : Parcourir les checkboxes cochées et supprimer les lignes.
    for (const checkbox of checkedBoxes) {
        // Récupérer la ligne (<tr>) parente de la checkbox.
        // Slide 88 : La propriété parentNode permet de remonter dans l'arbre.
        // Ici, on remonte deux fois : input -> td -> tr.
        const row = checkbox.parentNode.parentNode;

        // Récupérer la valeur des points dans la 4ème cellule (index 3).
        // Slide 61 : On utilise les enfants de la ligne.
        const pointsCell = row.children[3];
        const pointsToRemove = parseInt(pointsCell.textContent);

        // Mettre à jour total_points.
        total_points = total_points - pointsToRemove;

        // Décrémenter lignes.
        lignes = lignes - 1;

        // Supprimer la ligne du DOM.
        // Slide 100 : La méthode remove() supprime un élément du DOM.
        row.remove();

        // Supprimer la même entrée dans le tableau persons.
        // On cherche l'objet correspondant dans persons et on le supprime.
        // Pour cela, on utilise la position (lignes) ou les données.
        // Ici, on va parcourir persons et supprimer l'objet qui correspond aux données.
        const nomToRemove = row.children[1].textContent;
        const prenomToRemove = row.children[2].textContent;
        
        // On utilise findIndex pour trouver l'index de l'objet à supprimer.
        const indexToRemove = persons.findIndex(p => 
            p.nom === nomToRemove && 
            p.prenom === prenomToRemove && 
            p.points === pointsToRemove
        );
        
        if (indexToRemove !== -1) {
            // splice(index, 1) supprime 1 élément à partir de l'index.
            persons.splice(indexToRemove, 1);
        }
    }

    // Étape 7 : Mettre à jour le résumé.
    update_summary();

    // Message de succès.
    alert("Suppression effectuée avec succès !");
}


// --- 3. Démarrer l'application ---
init();