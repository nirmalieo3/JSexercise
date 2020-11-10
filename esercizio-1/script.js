/**
 * esercizio 1
 * 
 * rappresentare il diagramma di flusso rappresentato in diagramma_flusso.png, 
 * 
 * con le istruzioni condizionali if, else if, else (valutare quali sono necessarie)
 *  
 */
 
 function myFun(a, b){
 if (a > b){
 	return a;
 }else {
    return  b;
 }
};

 let x = myFun(6, 4);
 document.write(`<h1> ${x} </h1>`)

console.log(x);
 

