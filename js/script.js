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


const costoAlKm = 0.21;
const minori = 0.2;
const over = 0.4;

let kmDaPercorrere;
let etaPasseggero;
let prezzoFinale;
let prezzoViaggio;
let scontoMinori;
let scontoOver;


const btnInput = document.getElementById('btn-input');

btnInput.addEventListener('click', function(){

  const name = document.querySelector('.name').value;
  document.getElementById('output-name').innerHTML = name;
  document.querySelector('.name').value = '';

  kmDaPercorrere = document.querySelector('.km').value;
  document.getElementById('output-km').innerHTML = kmDaPercorrere;
  document.querySelector('.km').value = '';


  etaPasseggero = document.querySelector('.age').value;
  document.getElementById('output-eta').innerHTML = etaPasseggero;
  document.querySelector('.age').value = '';


  prezzoViaggio = kmDaPercorrere * costoAlKm;
  scontoMinori = prezzoViaggio * minori;
  scontoOver = prezzoViaggio * over;

  //  inizio calcolo sconti

  if (etaPasseggero < 18) {
    prezzoFinale = prezzoViaggio - scontoMinori;
   } else if (etaPasseggero >= 65) {
    prezzoFinale = prezzoViaggio - scontoOver;
   } else 
    prezzoFinale = prezzoViaggio;
   

document.getElementById('output').innerHTML = `€ ${prezzoFinale.toFixed(2)}`;
});



// refresh pagina con tasto annulla


function refreshPage(){
  window.location.reload();
} 











