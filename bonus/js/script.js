//Recupero l'elemento dal DOM
const pswGen = document.getElementById("password-gen");
console.log(pswGen);

//Chiedo all'utente il suo nome (creo una const)
const firstName = prompt("Come ti chiami?");
console.log(firstName);

//Chiedo all'utente il suo cognome (creo una const)
const secondName = prompt("Qual'è il tuo cognome?");
console.log(secondName);

//Chiedo all'utente il suo colore preferito (creo una const)
const preferColor = prompt("Qual'è il tuo colore preferito?");
console.log(preferColor);

//Creo una const con la somma delle 3 costanti + il numero 21
const finalPsw = firstName + secondName + preferColor + "21";
console.log(finalPsw);

//Stampo in pagina la pass Generata
pswGen.innerText = "la tua password è: " + finalPsw ; 





