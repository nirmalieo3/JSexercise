/**
 * esercizio 3
 * 
 * - nel file html troviamo un div (rappresentato come un quadrato) e due button mostra e nascondi
 * - scrivi una funzione che nasconde il quadrato ed assegnala all'evento click del button con id="nascondi"  
 * - scrivi una funzione che mostra il quadrato ed assegnala all'evento click del button con id="mostra" 
 * 
 * suggerimenti: vi servirà manipolare il dom, il metodo/funzione che vi sarà più utile sarà document.getElementById 
 * 
 */
let hidden = document.getElementById("nascondi");
let square =  document.getElementById("quadrato");
let show = document.getElementById("mostra");
 
 function hidInfo(){
     square.style.display = 'none';
 }

hidden.addEventListener('click', hidInfo);

function showInfo(){
    square.style.display = 'block';
}

show.addEventListener('click', showInfo);