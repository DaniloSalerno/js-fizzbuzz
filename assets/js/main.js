/*BONUS 1:
Crea un container nel DOM ,

aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
 a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. 
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */
const rowElement = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {
    //const boxContent = document.querySelector('.col');
    let colorStyle;
     
    if (!(i % 3) && !(i % 5)) {

        //boxContent.textContent = 'FizzBuzz';
        colorStyle = 'bg-success';
        console.log('FizzBuzz');

    } else if (!(i % 3)) {

        //boxContent.textContent = 'Fizz';
        colorStyle = 'bg-warning';
        console.log('Fizz');

    } else if (!(i % 5)) {
        //boxContent.textContent = 'Buzz';
        colorStyle = 'bg-danger';
        console.log('Buzz');

    } else {
        
        colorStyle = 'bg-primary';
        console.log(i);
        
    }

    rowElement.innerHTML += `<div class="square ${colorStyle}">${i}</div>`;


 }