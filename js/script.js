// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19
// es: pippobaudoblack19

// Dichiarazione variabili
var nome, cognome, colore;
var pass;
var annoCorrente;
var campoPass;


// Debug
console.group('Debug');
console.log('Inizio del programma');

// Acquisisci data dal sistemna
annoCorrente = new Date().getFullYear()

// Acquisisci dati da utente
nome    = prompt('Qual è il tuo nome?');
cognome = prompt('Qual è il tuo cognome?');
colore  = prompt('Qual è il tuo colore preferito?');

// Genera password
pass = nome + cognome + colore + annoCorrente;
console.log('La password generata è ' +pass);

//Scrivi dati a video
document.getElementById('nome').innerText += " " + nome;
document.getElementById('cognome').innerText += " " + cognome;
document.getElementById('colore').innerText += " " + colore;
document.getElementById('password').innerText = pass;


console.log('Programma terminato con successo');
console.groupEnd('Debug');
 // /Debug
