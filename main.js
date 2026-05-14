
//Soluzione
for (let i=1; i<=100; i++){
   
     if (i % 3 === 0 && i % 5 === 0) console.log(`FizzBuzz`)
     else if (i % 3 === 0) console.log(`Fizz`)
     else if (i % 5 === 0) console.log(`Buzz`)
     else console.log(i);
    
}

/* Spiegazione della soluzione:

- con il for ho ciclato e contato i numeri da 1 a 100 compreso
- Ho inserito come primo if il caso in cui un numero è multiplo sia di 3 che di 5 allora stampa "FizzBuzz" al posto del numero
perché in una catena di if / else if viene eseguita solo la prima condizione vera.
Infatti se avessi messo prima l'if “multiplo di 3” o “multiplo di 5”, un numero come 15 che soddisfa entrambe le condizioni,
sarebbe stato intercettato dal primo if valido e non avrebbe mai raggiunto l'if più specifico “multiplo di 3 e 5”.
- Poi ho inserito altrimenti se il numero è multiplo di 3 allora stampa "Fizz" al posto del numero.
- Poi ancora ho inserito altrimenti se il numero è multiplo di 5 allora stampa "Buzz" al posto del numero.
- Infine ho inserito altrimenti stampa il numero 

*/
