//Recupero l'elemento dal DOM
const pswGen = document.getElementById("password-gen");

//Chiedo all'utente il suo nome (creo una const)
const firstName = prompt("Come ti chiami?");

//Chiedo all'utente il suo cognome (creo una const)
const secondName = prompt("Qual'è il tuo cognome?");

//Chiedo all'utente il suo colore preferito (creo una const)
const preferColor = prompt("Qual'è il tuo colore preferito?");

//Creo una const con la somma delle 3 costanti + il numero 21
const finalPsw = firstName + secondName + preferColor + "21";

//Stampo in pagina la pass Generata
pswGen.innerText = "la tua password è: " + finalPsw ; 





