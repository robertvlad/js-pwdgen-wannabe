//PASSWORD GENERATOR FORM - Permette all'utente di creare una facile Password in modo veloce, ma con un basso livello di sicurezza.


// 1 - Illustrare la funzione del tool e la modalità di utilizzo.

alert("Questo è un semplice tool per generare una password facile da ricordare. Ti ricordiamo di premere OK ad ogni passaggio per generare correttamente la tua password.")

// 2 - Richiedere di inserire il NOME dell'utente

let first_name = prompt("Per Generare la tua Password, inserisci inizialmente il tuo NOME.")

// 3 - Richiedere di inserire il COGNOME dell'utente

let last_name = prompt("Ora inserisci il tuo COGNOME.")

// 4 - Richiedere di inserire il COLORE preferito dell'utente

let color = prompt("Per finire, insierisci il tuo COLORE preferito.")

// 5 - Visualizzare a schermo la PASSWORD finale dell'utente caratterizzata dalla struttura NomeCognomeColore21

document.getElementById("password").innerHTML = first_name + last_name + color + "21"