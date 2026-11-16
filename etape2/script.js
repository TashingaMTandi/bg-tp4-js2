"use strict";

// Slide 51: Mode strict pour un code plus sûr.

/**
 * Slide 14 & 104: Crée une nouvelle ligne (<tr>) et l'ajoute au tableau.
 * @param {number} num - Le numéro de la ligne.
 * @param {string} nom - Le nom de la personne.
 * @param {string} prenom - Le prénom de la personne.
 * @param {number} points - Les points de la personne.
 */
function doInsertRowTable(num, nom, prenom, points) {
    // 1. Récupérer le tableau (tbody) pour y ajouter la ligne.
    // Slide 76: querySelector pour trouver l'élément.
    const tableBody = document.querySelector("#table_container table tbody");

    // 2. Créer un élément de type tr (ligne de tableau).
    // Slide 104: createElement permet de créer un nouvel élément HTML.
    const row = document.createElement("tr");

    // 3. Affecter une classe à la ligne (optionnel mais recommandé).
    row.setAttribute("class", "table_row");

    // 4. Créer les 5 éléments <td> (colonnes).
    const cell1 = document.createElement("td"); // N°
    const cell2 = document.createElement("td"); // Nom
    const cell3 = document.createElement("td"); // Prénom
    const cell4 = document.createElement("td"); // Points
    const cell5 = document.createElement("td"); // Checkbox

    // 5. Remplir le contenu de chaque colonne.
    // Slide 90 & 91: On utilise textContent pour insérer du texte simple.
    // (innerHTML et innerText sont aussi possibles, mais textContent est plus sûr).
    cell1.textContent = num;
    cell2.textContent = nom;
    cell3.textContent = prenom;
    cell4.textContent = points;

    // La 5ème colonne contient une checkbox.
    // Slide 104: On crée l'élément input et on le configure.
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // Slide 106: setAttribute permet d'ajouter des attributs.
    cell5.appendChild(checkbox);

    // 6. Affecter les classes CSS aux colonnes.
    // Slide 106: On utilise setAttribute pour ajouter la classe.
    cell1.setAttribute("class", "col_number");
    cell2.setAttribute("class", "col_text");
    cell3.setAttribute("class", "col_text");
    cell4.setAttribute("class", "col_number");
    cell5.setAttribute("class", "col_chkbox");

    // 7. Ajouter les colonnes à la ligne.
    // Slide 104: appendChild ajoute un élément enfant.
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);

    // 8. Ajouter la ligne complète au tableau (tbody).
    tableBody.appendChild(row);
}