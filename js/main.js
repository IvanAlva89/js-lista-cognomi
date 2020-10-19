//Array lista cognomi
var cognomi = ['bianchi', 'rossi', 'duzioni', 'balsano', 'giorgini'];

//Chiedere il cognome all'utente
var cognomeUtente = prompt('Prego, inserisci il tuo cognome').toLowerCase();

while ( isNaN(cognomeUtente) == false ) {
  cognomeUtente = prompt('Riprova inserendo correttamente il tuo cognome');
}

//Aggiungere il cognome dell'utente
cognomi.push(cognomeUtente);

//Ordinare alfabeticamente la lista dei cognomi
cognomi.sort();
console.log(cognomi);

for (var i = 0; i < cognomi.length; i++) {
  document.getElementById('surname-list').innerHTML += "<li>" + cognomi[i] + "</li>";
}

//Scrivendo la posizione umana della lista dei cognomi
var posizione = cognomi.indexOf(cognomeUtente) + 1;
document.getElementById("position-list").innerHTML = 'La tua posizione nell\'elenco dei cognomi è: ' + posizione;
