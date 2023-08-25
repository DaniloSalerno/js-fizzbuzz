const boxElement = document.querySelector('.box');

for (let i = 1; i <= 100; i++) {

    let colorStyle;
    let boxContent;

    if (!(i % 3) && !(i % 5)) {

        colorStyle = 'bg-success';
        boxContent = 'FizzBuzz';

        console.log('FizzBuzz');

    } else if (!(i % 3)) {

        colorStyle = 'bg-warning';
        boxContent = 'Fizz';

        console.log('Fizz');

    } else if (!(i % 5)) {

        colorStyle = 'bg-danger';
        boxContent = 'Buzz';

        console.log('Buzz');

    } else {
        
        colorStyle = 'bg-primary';
        boxContent = i;
        
        console.log(i);
        
    }

    boxElement.innerHTML += `<div class="square justify-content-center d-flex align-items-center ${colorStyle}">${boxContent}</div>`;


 }