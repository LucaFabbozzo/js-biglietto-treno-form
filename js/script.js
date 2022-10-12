// Descrizione:
// Scrivere (come ieri) un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// Potete usare la vostra logica di ieri oppure rifarla anche in base alla correzione di stamattina
// Solo una volta che la logica sarà funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

// const nome = prompt('Come ti chiami?');
// const kmDaPercorrere = prompt('Quanti km faremo insieme?');
// const etaPasseggero = prompt('Quanti anni hai?');
const costoAlKm = 0.21;
const minori = 0.2;
const over = 0.4;


let msg, prezzoTotale, prezzoScontato;

prezzoTotale = kmDaPercorrere * costoAlKm;

msg = `Il prezzo del biglietto è di € ${prezzoTotale.toFixed(2)}.`;

if (etaPasseggero < 18) {
  prezzoScontato = prezzoTotale * (1 - minori);
  msg += `
  <br>
  Essendo minorenne hai lo sconto del ${minori * 100}% quindi paghi solo € ${prezzoScontato.toFixed(2)}!
`;
} else if (etaPasseggero >= 65) {
  prezzoScontato = prezzoTotale * (1 - over);
  msg += `
  <br>
  Essendo Over65 hai lo sconto del ${over * 100}% quindi paghi solo € ${prezzoScontato.toFixed(2)}!
`;
}




document.getElementById('output').innerHTML = msg;

document.querySelector('.name').innerHTML = nome;
document.querySelector('.km').innerHTML = kmDaPercorrere;
document.querySelector('.age').innerHTML = etaPasseggero;