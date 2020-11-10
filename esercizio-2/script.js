/**
 * esercizio 2
 * 
 * - utilizzare un ciclo for per stampare a console i valori del seguente array var array = [1, 2, 3, 4, 5, 6, 7, 8]
 * 
 * - scrivere un altro ciclo for che stampi solo i numeri pari (piccolo suggerimento vi servirà l'operatore modulo %)
 * 
 */
let arr1= [1,2,3,4,5,6,7,8];
 	for(let i = 0; i < arr1.length; i++){
 	 document.write('<h1>'+ arr1[i]+ '</h1><br>') 
		
 };
 
 let arr2 = [1,2,3,4,5,6,7,8];
 	for(let i = 0; i < arr2.length; i++){
		 if(arr2[i] % 2 === 0){
			document.write('<h1>'+ arr2[i]+ '</h1><br>') 
		 }
		};
		