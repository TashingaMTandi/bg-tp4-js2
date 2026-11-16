"use strict";

// Slide 51: Strict mode to avoid silent errors.

// --- 1. The Data (Slide 40) ---
// We declare an array of objects that will hold our persons.
// This is the "single source of truth" of our application.
const persons = [
    { nom: 'nom-1', prenom: 'prenom-1', points: 5 },
    { nom: 'nom-2', prenom: 'prenom-2', points: 10 },
    { nom: 'nom-3', prenom: 'prenom-3', points: 15 }
];

// --- 2. Row Counter (Slide 50) ---
// We use "let" because this value will change (script-level scope).
let lignes = 0;



 // Slide 14 & 104: Creates a new row (<tr>) and appends it to the table.
 // This is the same function as in Step 2.
 
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



 // Slide 45: Function that inserts a person with an automatic number.
 // It increments "lignes", then calls doInsertRowTable.
 
function doInsert(nom, prenom, points) {
    // We increment the counter on each insertion.
    lignes = lignes + 1;
    // We use "lignes" as the row number.
    doInsertRowTable(lignes, nom, prenom, points);
}



 // Slide 44: Initialization function.
 // It loops through the "persons" array and inserts each object.
 
function init() {
    // Using the for...of loop seen in the course (Slide 44).
    for (const person of persons) {
        // We call doInsert with the data of the current object.
        doInsert(person.nom, person.prenom, person.points);
    }
}



 // Slide 44 & 30: Displays the content of the "persons" array in the console.
 
function consoleTableau() {
    console.log(persons);
}


// --- 3. Call init() ---
// We launch the initialization at the end of the script.
init();